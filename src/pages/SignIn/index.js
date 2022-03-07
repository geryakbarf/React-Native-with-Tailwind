import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <View
      style={[
        tailwind('flex h-full justify-center items-center'),
        {
          backgroundColor: '#FAFAFA',
        },
      ]}>
      <View
        style={[
          tailwind('rounded bg-white h-72'),
          {
            width: '80%',
            elevation: 2,
          },
        ]}>
        <Text
          style={[
            tailwind('text-center text-sm mt-6 ml-4 mr-4'),
            {
              color: '#999999',
            },
          ]}>
          You will need your institutional username and password to sign in,
          which provided by your institution.
        </Text>
        <Text
          style={[
            tailwind('text-center text-sm mt-6 ml-4 mr-4'),
            {
              color: '#999999',
            },
          ]}>
          If you already have your institutional username and password, please
          click this button.
        </Text>
        <Pressable
          style={[
            tailwind(
              'h-14 rounded ml-6 mr-6 mt-6 flex justify-center items-center',
            ),
            {
              backgroundColor: '#54A3DA',
            },
          ]}
          onPress={() => navigation.navigate('SignIn2')}>
          <Text style={tailwind('text-white font-bold')}>Sign In</Text>
        </Pressable>
      </View>
      <View
        style={[
          tailwind('rounded bg-white h-64 mt-16'),
          {
            width: '80%',
            elevation: 2,
          },
        ]}>
        <Text
          style={[
            tailwind('text-center text-sm mt-6 ml-4 mr-4'),
            {
              color: '#999999',
            },
          ]}>
          If you have not got your institutional username and password, please
          contact your institution.
        </Text>
        <Text
          style={[
            tailwind('text-center text-sm mt-6 ml-4 mr-4'),
            {
              color: '#999999',
            },
          ]}>
          Find out if your institution is already join by click this button
        </Text>
        <Pressable
          style={[
            tailwind(
              'h-14 rounded ml-6 mr-6 mt-6 flex justify-center items-center',
            ),
            {
              borderColor: '#54A3DA',
              borderWidth: 2,
            },
          ]}
          onPress={() => navigation.navigate('Institution List')}>
          <Text
            style={[
              tailwind('font-bold'),
              {
                color: '#54A3DA',
              },
            ]}>
            Institution List
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
