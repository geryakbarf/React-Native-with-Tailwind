import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Pressable, Text, View} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const InstitutionList = () => {
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
      <Text style={tailwind('text-center text-black mt-10 font-bold')}>
        Institution List
      </Text>
      <View
        style={tailwind('flex-row items-center bg-white h-14 mt-10 ml-8 mr-8')}>
        <Text
          style={[
            tailwind('text-lg font-bold ml-8'),
            {
              color: '#39B54A',
            },
          ]}>
          1. UNPAD
        </Text>
        <Text
          style={[
            tailwind('text-lg font-bold ml-8 mr-8'),
            {
              color: '#54A3DA',
              position: 'absolute',
              right: 0,
              textDecorationLine: 'underline',
            },
          ]}>
          Email
        </Text>
      </View>
      <View
        style={tailwind('flex-row items-center bg-white h-14 mt-2 ml-8 mr-8')}>
        <Text
          style={[
            tailwind('text-lg font-bold ml-8'),
            {
              color: '#39B54A',
            },
          ]}>
          2. Unikom
        </Text>
      </View>
      <View
        style={tailwind('flex-row items-center bg-white h-14 mt-2 ml-8 mr-8')}>
        <Text
          style={[
            tailwind('text-lg font-bold ml-8'),
            {
              color: '#39B54A',
            },
          ]}>
          3. ITHB
        </Text>
      </View>
      <View
        style={tailwind('flex-row items-center bg-white h-14 mt-2 ml-8 mr-8')}>
        <Text
          style={[
            tailwind('text-lg font-bold ml-8'),
            {
              color: '#39B54A',
            },
          ]}>
          4. ITB
        </Text>
      </View>
      <View
        style={tailwind('flex-row items-center bg-white h-14 mt-2 ml-8 mr-8')}>
        <Text
          style={[
            tailwind('text-lg font-bold ml-8'),
            {
              color: '#39B54A',
            },
          ]}>
          5. STMIK AMIKOM
        </Text>
      </View>
      <View style={tailwind('h-44 bg-white rounded mt-4 ml-12 mr-12')}>
        <Text
          style={[
            tailwind('text-center mt-8 ml-2 mr-2'),
            {
              color: '#999999',
            },
          ]}>
          If your Institution was not listed , please use this app as a trial
          version
        </Text>
        <Pressable
          style={[
            tailwind(
              'flex-1 justify-center items-center mb-4 ml-8 mr-8 rounded mt-8',
            ),
            {
              backgroundColor: '#54A3DA',
            },
          ]}
          onPress={() => navigation.navigate('Register')}>
          <Text style={tailwind('text-white')}>
            Create Account (Trial Version)
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default InstitutionList;
