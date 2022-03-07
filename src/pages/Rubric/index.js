import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import iconBack from '../../assets/icons/ic_session_back.png';
import {useNavigation} from '@react-navigation/native';

const Rubric = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <View
      style={[
        tailwind('h-full'),
        {
          backgroundColor: '#FAFAFA',
        },
      ]}>
      <Pressable
        style={[
          tailwind(
            'flex ml-8 mt-4 bg-white rounded-full items-center justify-center h-8 w-8',
          ),
          {
            elevation: 3,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <Image source={iconBack} style={tailwind('w-4 h-4 mr-1')} />
      </Pressable>
      <Text style={tailwind('text-black text-center font-bold mt-4 text-lg')}>
        Rubric
      </Text>
      <Text style={tailwind('text-black text-center text-sm mt-2')}>
        Choose from avaible rubrics
      </Text>
      <View
        style={[
          tailwind('mt-8 ml-8 mr-8 bg-white justify-center h-16 rounded'),
          {
            elevation: 3,
          },
        ]}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999999"
          style={[
            tailwind('ml-4 mr-4'),
            {
              color: '#999999',
            },
          ]}
        />
      </View>
      <Pressable
        style={[
          tailwind('mt-10 bg-white flex justify-center h-20 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}
        onPress={() => navigation.navigate('Rubric Details')}>
        <Text style={tailwind('text-black text-lg ml-8')}>Rubric 1</Text>
      </Pressable>
      <View
        style={[
          tailwind('bg-white flex justify-center h-20 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}>
        <Text style={tailwind('text-black text-lg ml-8')}>Rubric 2</Text>
      </View>
      <View
        style={[
          tailwind('bg-white flex justify-center h-20 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}>
        <Text style={tailwind('text-black text-lg ml-8')}>Rubric 3</Text>
      </View>
      <View
        style={[
          tailwind('bg-white flex justify-center h-20 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}>
        <Text style={tailwind('text-black text-lg ml-8')}>Rubric 4</Text>
      </View>
      <View
        style={[
          tailwind('bg-white flex justify-center h-20 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}>
        <Text style={tailwind('text-black text-lg ml-8')}>Rubric 5</Text>
      </View>
      <View
        style={[
          tailwind('bg-white flex justify-center h-20 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}>
        <Text style={tailwind('text-black text-lg ml-8')}>Rubric 6</Text>
      </View>
      <View
        style={[
          tailwind('bg-white flex justify-center h-20 border-b-2'),
          {
            borderBottomColor: '#F2F2F2',
          },
        ]}>
        <Text style={tailwind('text-black text-lg ml-8')}>Rubric 7</Text>
      </View>
    </View>
  );
};

export default Rubric;
