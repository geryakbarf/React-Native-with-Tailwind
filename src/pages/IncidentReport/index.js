import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import iconBack from '../../assets/icons/ic_signin_back.png';
import { StackActions, useNavigation } from "@react-navigation/native";

const IncidentReport = () => {
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
            'bg-white flex justify-center items-center mt-8 ml-8 h-8 w-8 rounded-full',
          ),
          {
            elevation: 3,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <Image source={iconBack} style={tailwind('h-4 w-4 mr-1')} />
      </Pressable>
      <Text style={tailwind('mt-4 text-center text-black text-lg font-bold')}>
        Incident Report
      </Text>
      <Text
        style={[
          tailwind('text-sm mt-8 ml-8'),
          {
            color: '#8C8C8C',
          },
        ]}>
        Your Report
      </Text>
      <TextInput
        style={[
          tailwind('flex text-base mt-10 ml-8 mr-8 border-b'),
          {
            borderBottomColor: '#8C8C8C',
            color: '#8C8C8C',
          },
        ]}
        textContentType={'name'}
      />
      <View style={tailwind('flex-row items-center mt-20 ml-10 mr-10')}>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 mr-4 ml-4 flex-1 justify-center items-center border-2 rounded',
            ),
            {
              borderColor: '#54A3DA',
            },
          ]}>
          <Text
            style={[
              tailwind('text-center text-base'),
              {
                color: '#54A3DA',
              },
            ]}>
            Library
          </Text>
        </Pressable>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 mr-4 ml-4 flex-1 justify-center items-center border-2 rounded',
            ),
            {
              borderColor: '#54A3DA',
            },
          ]}>
          <Text
            style={[
              tailwind('text-center text-base'),
              {
                color: '#54A3DA',
              },
            ]}>
            Camera
          </Text>
        </Pressable>
      </View>
      <View style={tailwind('flex-row items-center mt-8 ml-10 mr-10')}>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 mr-4 ml-4 flex-1 justify-center items-center border-2 rounded',
            ),
            {
              borderColor: '#54A3DA',
            },
          ]}>
          <Text
            style={[
              tailwind('text-center text-base'),
              {
                color: '#54A3DA',
              },
            ]}>
            Audio
          </Text>
        </Pressable>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 mr-4 ml-4 flex-1 justify-center items-center border-2 rounded',
            ),
            {
              borderColor: '#54A3DA',
            },
          ]}>
          <Text
            style={[
              tailwind('text-center text-base'),
              {
                color: '#54A3DA',
              },
            ]}>
            Tag
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={[
          tailwind(
            'flex h-16 justify-center items-center self-center rounded absolute bottom-10',
          ),
          {
            backgroundColor: '#54A3DA',
            width: '70%',
          },
        ]}
        onPress={() => navigation.dispatch(StackActions.pop(2))}>
        <Text style={tailwind('text-white text-center text-base font-bold')}>
          Save and Report
        </Text>
      </Pressable>
    </View>
  );
};

export default IncidentReport;
