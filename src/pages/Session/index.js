import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import imgQR from '../../assets/image/img_session_qr.png';
import { useNavigation } from "@react-navigation/native";

const Session = () => {
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
      <Text style={tailwind('text-center text-black font-bold text-xl mt-12')}>
        New Session
      </Text>
      <View style={tailwind('flex w-full items-center mt-12')}>
        <Image source={imgQR} style={tailwind('h-60 w-60')} />
      </View>
      <Text
        style={[
          tailwind('text-center text-base mt-10'),
          {
            color: '#999999',
          },
        ]}>
        Session Name
      </Text>
      <Text
        style={[
          tailwind('text-center text-base mt-2 font-bold'),
          {
            color: '#54A3DA',
          },
        ]}>
        20220427-1-Integrated-Clinic
      </Text>
      <Text
        style={[
          tailwind('text-center text-base mt-6'),
          {
            color: '#999999',
          },
        ]}>
        Session Code
      </Text>
      <Text
        style={[
          tailwind('text-center text-base font-bold mt-2'),
          {
            color: '#54A3DA',
          },
        ]}>
        K4N14
      </Text>
      <View style={tailwind('flex-row justify-center mt-12 mr-4 ml-4')}>
        <View
          style={[
            tailwind(
              'flex-1 ml-2 mr-2 justify-center items-center h-20 rounded border-2 bg-white',
            ),
            {
              borderColor: '#F86C6C',
            },
          ]}>
          <Text
            style={[
              tailwind('text-center font-bold text-base'),
              {
                color: '#F86C6C',
              },
            ]}>
            Delete Session
          </Text>
        </View>
        <View
          style={[
            tailwind(
              'flex-1 justify-center items-center ml-2 mr-2 h-20 rounded border-2 bg-white',
            ),
            {
              borderColor: '#3FB74F',
            },
          ]}>
          <Text
            style={[
              tailwind('text-center font-bold text-base'),
              {
                color: '#3FB74F',
              },
            ]}>
            Edit Session
          </Text>
        </View>
        <Pressable
          style={[
            tailwind(
              'flex-1 justify-center items-center ml-2 mr-2 h-20 rounded',
            ),
            {
              backgroundColor: '#54A3DA',
            },
          ]}
          onPress={() => navigation.navigate('Session List')}>
          <Text
            style={[tailwind('text-center font-bold text-base text-white')]}>
            Proceed to Session
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Session;
