import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import iconDrawer from '../../assets/icons/ic_dashboard_drawer.png';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
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
        style={[
          tailwind('h-60'),
          {
            backgroundColor: '#54A3DA',
          },
        ]}>
        <Image source={iconDrawer} style={tailwind('h-8 w-8 mt-8 ml-8')} />
        <View style={tailwind('bg-white rounded mt-24 mr-8 ml-8')}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999999"
            style={[
              tailwind('ml-8 mr-8'),
              {
                color: '#999999',
              },
            ]}
          />
        </View>
      </View>
      <Text
        style={[
          tailwind('mt-8 ml-8 font-bold text-lg'),
          {
            color: '#999999',
          },
        ]}>
        Activity
      </Text>
      <View style={tailwind('flex-row justify-center mt-4 ml-6 mr-6')}>
        <Pressable
          style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}
          onPress={() => navigation.navigate('New Session')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-16 text-center'),
              {
                color: '#999999',
              },
            ]}>
            New Session
          </Text>
        </Pressable>
        <View style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-16 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Active Session
          </Text>
        </View>
        <View style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-16 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Student Progress
          </Text>
        </View>
      </View>
      <Text
        style={[
          tailwind('mt-8 ml-8 font-bold text-lg'),
          {
            color: '#999999',
          },
        ]}>
        Files
      </Text>
      <View style={tailwind('flex-row justify-center mt-4 ml-6 mr-6')}>
        <Pressable
          style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}
          onPress={() => navigation.navigate('Photos')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-16 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Photos
          </Text>
        </Pressable>
        <View style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-16 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Audio
          </Text>
        </View>
        <View style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-16 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Tags
          </Text>
        </View>
      </View>
      <View style={tailwind('flex-row justify-center mt-4 ml-6 mr-6')}>
        <Pressable
          style={tailwind('flex-1 rounded h-28 bg-white ml-2 mr-2')}>
          <Text
            style={[
              tailwind('ml-4 mr-4 mt-16 text-center'),
              {
                color: '#999999',
              },
            ]}>
            Incidents
          </Text>
        </Pressable>
        <View style={tailwind('flex-1 h-28 ml-2 mr-2')} />
        <View style={tailwind('flex-1 h-28 ml-2 mr-2')} />
      </View>
    </View>
  );
};

export default Dashboard;
