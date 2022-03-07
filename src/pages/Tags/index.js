import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {useNavigation} from '@react-navigation/native';
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import iconBack from '../../assets/icons/ic_signin_back.png';
import iconDropDown from '../../assets/icons/ic_tags_dropdown.png';

const Tags = () => {
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
        Tags
      </Text>
      <Text style={tailwind('text-center text-black text-sm mt-2')}>
        Tag your rubic
      </Text>
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
          <Text style={tailwind('text-black ml-4 text-base')}>Tag 1</Text>
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
        <Text style={tailwind('text-black ml-4')}>Sub Tag 1</Text>
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
        <Text style={tailwind('text-black ml-4')}>Sub Tag 2</Text>
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
        <Text style={tailwind('text-black ml-4')}>Sub Tag 3</Text>
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
        <Text style={tailwind('text-black ml-4')}>Sub Tag 4</Text>
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
          <Text style={tailwind('text-black ml-4 text-base')}>Tag 2</Text>
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
        <Text style={tailwind('text-black ml-4')}>Sub Tag 1</Text>
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
        <Text style={tailwind('text-black ml-4')}>Sub Tag 2</Text>
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
        <Text style={tailwind('text-black ml-4')}>Sub Tag 3</Text>
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
        <Text style={tailwind('text-black ml-4')}>Sub Tag 4</Text>
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
        onPress={() => navigation.goBack()}>
        <Text style={tailwind('text-white font-bold')}>Save</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Tags;
