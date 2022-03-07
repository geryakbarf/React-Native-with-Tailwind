import React, {useState} from 'react';
import {useTailwind} from 'tailwind-rn';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import iconBack from '../../assets/icons/ic_signin_back.png';
import iconDropDown from '../../assets/icons/ic_tags_dropdown.png';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modalbox';

const Rubric1 = () => {
  const [open, setOpen] = useState(false);
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <ScrollView
      style={[
        tailwind('h-full'),
        {
          backgroundColor: '#FAFAFA',
        },
      ]}>
      <Modal
        onClosed={() => setOpen(false)}
        style={tailwind('bg-white flex items-center rounded h-72 w-60')}
        isOpen={open}>
        <Text style={tailwind('text-black text-base mt-8')}>Success</Text>
        <View style={tailwind('absolute bottom-4')}>
          <Pressable
            style={[
              tailwind('h-10 rounded flex w-40 justify-center items-center'),
              {
                backgroundColor: '#54A3DA',
              },
            ]}
            onPress={() => navigation.pop(2)}>
            <Text style={tailwind('text-white text-xs')}>Back</Text>
          </Pressable>
          <Text style={tailwind('text-center text-black text-xs mt-2 mb-2')}>OR</Text>
          <Pressable
            style={[
              tailwind(
                'h-10 rounded flex w-40 justify-center items-center border-2',
              ),
              {
                borderColor: '#54A3DA',
              },
            ]}
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{name: 'Session Supervisor'}],
                }),
              )
            }>
            <Text
              style={[
                tailwind('text-xs'),
                {
                  color: '#54A3DA',
                },
              ]}>
              On Progress Assessment
            </Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        style={[
          tailwind(
            'bg-white flex justify-center items-center rounded-full h-8 w-8 mt-8 ml-8',
          ),
          {
            elevation: 3,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <Image source={iconBack} style={tailwind('h-4 w-4 mr-1')} />
      </Pressable>
      <Text style={tailwind('text-center text-black font-bold text-lg mt-4')}>
        Rubric
      </Text>
      <View
        style={[
          tailwind('h-16 bg-white rounded flex justify-center ml-8 mr-8 mt-16'),
          {
            elevation: 3,
          },
        ]}>
        <TextInput
          style={[
            tailwind('text-base ml-8'),
            {
              color: '#999999',
            },
          ]}
          placeholder="Search"
          placeholderTextColor="#999999"
        />
      </View>
      <View style={tailwind('flex-col mt-8 w-full')}>
        <View style={tailwind('flex-row w-full items-center')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6 ml-8'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4 text-base')}>
            Item Rubric 1
          </Text>
          <Image
            source={iconDropDown}
            style={tailwind('w-4 h-4 absolute right-8')}
          />
        </View>
        <View
          style={[
            tailwind('flex border-b-2 mt-2 ml-8 mr-8'),
            {
              borderBottomColor: '#999999',
            },
          ]}
        />
      </View>
      <View style={tailwind('flex-row items-center mt-8')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 1</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 2</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 3</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 4</Text>
      </View>
      <View style={tailwind('flex-col mt-8 w-full')}>
        <View style={tailwind('flex-row w-full items-center')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6 ml-8'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4 text-base')}>
            Item Rubric 2
          </Text>
          <Image
            source={iconDropDown}
            style={tailwind('w-4 h-4 absolute right-8')}
          />
        </View>
        <View
          style={[
            tailwind('flex border-b-2 mt-2 ml-8 mr-8'),
            {
              borderBottomColor: '#999999',
            },
          ]}
        />
      </View>
      <View style={tailwind('flex-row items-center mt-8')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 1</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 2</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 3</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 4</Text>
      </View>
      <Pressable
        style={[
          tailwind(
            'h-16 rounded flex items-center justify-center mt-8 ml-20 mr-20 mb-8',
          ),
          {
            backgroundColor: '#54A3DA',
          },
        ]}
        onPress={() => setOpen(true)}>
        <Text style={tailwind('text-white font-bold')}>Save</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Rubric1;
