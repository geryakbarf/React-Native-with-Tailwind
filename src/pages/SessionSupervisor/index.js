import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import iconBack from '../../assets/icons/ic_session_back.png';
import {useNavigation} from '@react-navigation/native';

const SessionSupervisor = () => {
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
      <View
        style={{
          backgroundColor: '#54A3DA',
        }}>
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
        <View style={tailwind('flex w-full items-center mt-4')}>
          <View
            style={[
              tailwind('h-20 w-20 bg-white'),
              {
                borderRadius: 50,
              },
            ]}
          />
        </View>
        <Text
          style={tailwind('text-center text-white font-bold text-base mt-4')}>
          Gery Akbar Fauzi
        </Text>
        <Text style={tailwind('text-center text-white text-base mt-2')}>
          085156038495
        </Text>
        <View
          style={tailwind(
            'flex justify-center bg-white h-14 rounded mt-6 mr-8 ml-8',
          )}>
          <Text
            style={[
              tailwind('ml-8 mr-8 text-base'),
              {
                color: '#999999',
              },
            ]}>
            Institution Name
          </Text>
        </View>
        <View
          style={tailwind(
            'flex justify-center bg-white h-14 rounded mt-4 mr-8 ml-8 mb-8',
          )}>
          <Text
            style={[
              tailwind('ml-8 mr-8 text-base'),
              {
                color: '#999999',
              },
            ]}>
            Learning Activity
          </Text>
        </View>
      </View>
      <View style={tailwind('flex-row justify-center mt-8 ml-6 mr-6')}>
        <Pressable
          style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}
          onPress={() => navigation.navigate('Text')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-20 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Text
          </Text>
        </Pressable>
        <Pressable
          style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}
          onPress={() => navigation.navigate('Rubric')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-20 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Rubric
          </Text>
        </Pressable>
        <Pressable
          style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}
          onPress={() => navigation.navigate('Audio')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-20 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Audio
          </Text>
        </Pressable>
      </View>
      <View style={tailwind('flex-row justify-center mt-4 ml-6 mr-6')}>
        <View style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-20 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Image
          </Text>
        </View>
        <Pressable
          style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}
          onPress={() => navigation.navigate('Incidents Terms')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-20 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Incident
          </Text>
        </Pressable>
        <Pressable
          style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}
          onPress={() => navigation.navigate('Tags')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-20 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Tags
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SessionSupervisor;
