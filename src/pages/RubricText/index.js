import React from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import iconBack from '../../assets/icons/ic_session_back.png';
import {useNavigation} from '@react-navigation/native';

const RubricText = () => {
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
      <Pressable
        style={[
          tailwind(
            'mt-8 h-8 w-8 ml-8 bg-white rounded-full flex justify-center items-center',
          ),
          {
            elevation: 3,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <Image source={iconBack} style={tailwind('h-4 w-4 mr-1')} />
      </Pressable>
      <Text style={tailwind('text-black text-center font-bold text-lg mt-4')}>
        Text
      </Text>
      <Text
        style={[
          tailwind('text-sm ml-8 mt-8'),
          {
            color: '#999999',
          },
        ]}>
        About the session
      </Text>
      <TextInput
        style={[
          tailwind('ml-8 mt-10 border-b-2 mr-8'),
          {
            borderBottomColor: '#999999',
            color: '#999999',
          },
        ]}
      />
      <Text
        style={[
          tailwind('ml-8 mt-10 text-sm'),
          {
            color: '#999999',
          },
        ]}>
        What went well?
      </Text>
      <TextInput
        style={[
          tailwind('mt-10 ml-8 mr-8 border-b-2'),
          {
            color: '#999999',
            borderBottomColor: '#999999',
          },
        ]}
      />
      <Text
        style={[
          tailwind('mt-10 ml-8 text-sm'),
          {
            color: '#999999',
          },
        ]}>
        What went wrong
      </Text>
      <TextInput
        style={[
          tailwind('mt-10 ml-8 mr-8 border-b-2'),
          {
            borderBottomColor: '#999999',
          },
        ]}
      />
      <Text
        style={[
          tailwind('mt-10 ml-8 text-sm'),
          {
            color: '#999999',
          },
        ]}>
        Action Plan
      </Text>
      <TextInput
        style={[
          tailwind('ml-8 mt-10 mr-8 border-b-2'),
          {
            color: '#999999',
            borderBottomColor: '#999999',
          },
        ]}
      />
      <View style={tailwind('flex-row mt-10 items-center mr-8 ml-8 mb-10')}>
        <Pressable
          style={[
            tailwind(
              'bg-white border-2 rounded h-16 flex-1 items-center justify-center ml-2',
            ),
            {
              borderColor: '#54A3DA',
            },
          ]}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: '#54A3DA',
            }}>
            Save
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default RubricText;
