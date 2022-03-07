import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import iconBack from '../../assets/icons/ic_session_back.png';
import {useNavigation} from '@react-navigation/native';

const SessionList = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <View style={tailwind('h-full')}>
      <View
        style={[
          tailwind('h-72'),
          {
            backgroundColor: '#54A3DA',
          },
        ]}>
        <Pressable
          style={[
            tailwind(
              'h-8 w-8 justify-center items-center mt-8 ml-8 mr-8 bg-white',
            ),
            {
              borderRadius: 20,
              elevation: 3,
            },
          ]}
          onPress={() => navigation.goBack()}>
          <Image source={iconBack} style={[tailwind('h-6 w-6 mr-1')]} />
        </Pressable>
        <Text
          style={tailwind('text-center text-white font-bold text-2xl mt-8')}>
          Session Name
        </Text>
        <View
          style={tailwind(
            'flex justify-center bg-white h-16 rounded mt-12 mr-8 ml-8',
          )}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999999"
            style={[
              tailwind('ml-8 mr-8 text-base'),
              {
                color: '#999999',
              },
            ]}
          />
        </View>
      </View>
      <View
        style={[
          tailwind('bg-white w-full h-24 items-center'),
          {
            borderBottomColor: '#E8E8E8',
            borderBottomWidth: 2,
            flexDirection: 'row',
          },
        ]}>
        <View
          style={[
            tailwind('w-14 h-14 ml-8'),
            {
              backgroundColor: '#AAAAAA',
              borderRadius: 50,
            },
          ]}
        />
        <View
          style={[
            tailwind('ml-4'),
            {
              flexDirection: 'column',
            },
          ]}>
          <Text style={tailwind('font-bold text-base text-black mb-2')}>
            Gery Akbar Fauzi
          </Text>
          <Text style={tailwind('text-sm text-black')}>085156038495</Text>
        </View>
        <Pressable
          style={[
            tailwind('flex justify-center items-center w-20 h-10 mr-8 rounded'),
            {
              position: 'absolute',
              right: 0,
              backgroundColor: '#54A3DA',
            },
          ]}
          onPress={() => navigation.navigate('Session Supervisor')}>
          <Text style={tailwind('text-white')}>Assess</Text>
        </Pressable>
      </View>
      <View
        style={[
          tailwind('bg-white w-full h-24 items-center'),
          {
            borderBottomColor: '#E8E8E8',
            borderBottomWidth: 2,
            flexDirection: 'row',
          },
        ]}>
        <View
          style={[
            tailwind('w-14 h-14 ml-8'),
            {
              backgroundColor: '#AAAAAA',
              borderRadius: 50,
            },
          ]}
        />
        <View
          style={[
            tailwind('ml-4'),
            {
              flexDirection: 'column',
            },
          ]}>
          <Text style={tailwind('font-bold text-base text-black mb-2')}>
            Gery Akbar Fauzi
          </Text>
          <Text style={tailwind('text-sm text-black')}>085156038495</Text>
        </View>
        <Pressable
          style={[
            tailwind('flex justify-center items-center w-20 h-10 mr-8 rounded'),
            {
              position: 'absolute',
              right: 0,
              backgroundColor: '#54A3DA',
            },
          ]}>
          <Text style={tailwind('text-white')}>Assess</Text>
        </Pressable>
      </View>
      <View
        style={[
          tailwind('bg-white w-full h-24 items-center'),
          {
            borderBottomColor: '#E8E8E8',
            borderBottomWidth: 2,
            flexDirection: 'row',
          },
        ]}>
        <View
          style={[
            tailwind('w-14 h-14 ml-8'),
            {
              backgroundColor: '#AAAAAA',
              borderRadius: 50,
            },
          ]}
        />
        <View
          style={[
            tailwind('ml-4'),
            {
              flexDirection: 'column',
            },
          ]}>
          <Text style={tailwind('font-bold text-base text-black mb-2')}>
            Gery Akbar Fauzi
          </Text>
          <Text style={tailwind('text-sm text-black')}>085156038495</Text>
        </View>
        <Pressable
          style={[
            tailwind('flex justify-center items-center w-20 h-10 mr-8 rounded'),
            {
              position: 'absolute',
              right: 0,
              backgroundColor: '#54A3DA',
            },
          ]}>
          <Text style={tailwind('text-white')}>Assess</Text>
        </Pressable>
      </View>
      <View
        style={[
          tailwind('bg-white w-full h-24 items-center'),
          {
            borderBottomColor: '#E8E8E8',
            borderBottomWidth: 2,
            flexDirection: 'row',
          },
        ]}>
        <View
          style={[
            tailwind('w-14 h-14 ml-8'),
            {
              backgroundColor: '#AAAAAA',
              borderRadius: 50,
            },
          ]}
        />
        <View
          style={[
            tailwind('ml-4'),
            {
              flexDirection: 'column',
            },
          ]}>
          <Text style={tailwind('font-bold text-base text-black mb-2')}>
            Gery Akbar Fauzi
          </Text>
          <Text style={tailwind('text-sm text-black')}>085156038495</Text>
        </View>
        <Pressable
          style={[
            tailwind('flex justify-center items-center w-20 h-10 mr-8 rounded'),
            {
              position: 'absolute',
              right: 0,
              backgroundColor: '#54A3DA',
            },
          ]}>
          <Text style={tailwind('text-white')}>Assess</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SessionList;
