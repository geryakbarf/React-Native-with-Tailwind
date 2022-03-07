import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Image, Pressable, Text, View} from 'react-native';
import iconBack from '../../assets/icons/ic_signin_back.png';
import {useNavigation} from '@react-navigation/native';

const Photos = () => {
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
            'h-10 w-10 justify-center items-center mt-8 ml-8 mr-8 bg-white',
          ),
          {
            borderRadius: 20,
            elevation: 3,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <Image source={iconBack} style={[tailwind('h-6 w-6 mr-2')]} />
      </Pressable>
      <Text style={tailwind('mt-4 text-center text-black font-bold text-xl')}>
        Gallery
      </Text>
      <Text style={tailwind('mt-4 text-center text-black text-base')}>
        Rubric's gallery
      </Text>
      <View style={tailwind('flex-row justify-center mt-8 ml-8 mr-8')}>
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
      </View>
      <View style={tailwind('flex-row justify-center mt-1 ml-8 mr-8')}>
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
      </View>
      <View style={tailwind('flex-row justify-center mt-1 ml-8 mr-8')}>
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
        <View style={tailwind('flex-1 bg-white rounded h-32 ml-1 mr-1')} />
      </View>
      <View style={tailwind('flex-row justify-center mt-8 ml-8 mr-8')}>
        <View
          style={[
            tailwind(
              'flex-1 justify-center items-center rounded h-28 ml-2 mr-2',
            ),
            {
              backgroundColor: '#54A3DA',
            },
          ]}>
          <Text style={tailwind('text-white text-center')}>Browse Photo</Text>
        </View>
        <View
          style={[
            tailwind(
              'flex-1 justify-center items-center rounded h-28 bg-white ml-2 mr-2',
            ),
            {
              borderColor: '#54A3DA',
              borderWidth: 2,
            },
          ]}>
          <Text
            style={[
              tailwind('text-center'),
              {
                color: '#54A3DA',
              },
            ]}>
            Take Picture
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Photos;
