import React from 'react';
import {useTailwind} from 'tailwind-rn';
import iconBack from '../../assets/icons/ic_signin_back.png';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Audio = () => {
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
            'flex justify-center items-center mt-8 ml-8 rounded-full bg-white h-8 w-8',
          ),
          {
            elevation: 3,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <Image source={iconBack} style={tailwind('h-4 w-4 mr-1')} />
      </Pressable>
      <Text style={tailwind('mt-4 text-center text-lg text-black font-bold')}>
        Rubric's Audio
      </Text>
      <Text style={tailwind('mt-4 text-center text-sm text-black')}>
        Record your rubric review
      </Text>
      <View
        style={[
          tailwind(
            'flex justify-center items-center self-center rounded-full h-48 w-48 mt-32',
          ),
          {
            backgroundColor: '#FF9090',
          },
        ]}>
        <Text style={tailwind('text-white text-xl')}>REC</Text>
      </View>
      <Pressable
        style={[
          tailwind(
            'mt-20 ml-16  mr-16 rounded flex items-center justify-center h-16',
          ),
          {
            backgroundColor: '#54A3DA',
          },
        ]}
        onPress={() => navigation.navigate('Related Rubric')}>
        <Text style={tailwind('text-white')}>Link to Item Rubic</Text>
      </Pressable>
      <Text style={tailwind('text-center text-black mt-4')}>OR</Text>
      <Pressable
        style={[
          tailwind(
            'mt-4 ml-16  mr-16 rounded flex items-center justify-center h-16 border-2 bg-white',
          ),
          {
            borderColor: '#54A3DA',
          },
        ]}
        onPress={() => navigation.navigate('Audio Playlist')}>
        <Text
          style={{
            color: '#54A3DA',
          }}>
          Done
        </Text>
      </Pressable>
    </View>
  );
};

export default Audio;
