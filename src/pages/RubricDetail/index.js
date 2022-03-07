import React, {useRef} from 'react';
import {useTailwind} from 'tailwind-rn';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import iconBack from '../../assets/icons/ic_session_back.png';
import {useNavigation} from '@react-navigation/native';
import iconDropDown from '../../assets/icons/ic_tags_dropdown.png';
import iconUp from '../../assets/icons/ic_rubric_up.png';

const RubricDetail = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const mainScrollView = useRef();
  const onButtonClick = () => {
    mainScrollView.current.scrollTo({
      y: 0,
      animated: true,
    });
  };
  return (
    <ScrollView
      ref={mainScrollView}
      style={[
        tailwind('h-full'),
        {
          backgroundColor: '#FAFAFA',
        },
      ]}>
      <Pressable
        style={[
          tailwind(
            'bg-white flex justify-center items-center rounded-full h-8 w-8 mt-8 ml-8',
          ),
          {
            elevation: 3,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <Image source={iconBack} style={tailwind('h-4 w-4 mr-1')} />
      </Pressable>
      <Text style={tailwind('text-center text-black font-bold text-lg mt-4')}>
        Rubric
      </Text>
      <View
        style={[
          tailwind('h-16 bg-white rounded flex justify-center ml-8 mr-8 mt-16'),
          {
            elevation: 3,
          },
        ]}>
        <TextInput
          style={[
            tailwind('text-base ml-8'),
            {
              color: '#999999',
            },
          ]}
          placeholder="Search"
          placeholderTextColor="#999999"
        />
      </View>
      <View style={tailwind('flex-col mt-8 w-full')}>
        <View style={tailwind('flex-row w-full items-center')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6 ml-8'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4 text-base')}>
            Item Rubric 1
          </Text>
          <Image
            source={iconDropDown}
            style={tailwind('w-4 h-4 absolute right-8')}
          />
        </View>
        <View
          style={[
            tailwind('flex border-b-2 mt-2 ml-8 mr-8'),
            {
              borderBottomColor: '#999999',
            },
          ]}
        />
      </View>
      <View style={tailwind('flex-row items-center mt-8')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 1</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 1</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 1</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 1</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-8 ml-4 mr-4')}>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 flex-1 justify-center items-center rounded ml-4 mr-4',
            ),
            {
              borderColor: '#81BBE3',
              borderWidth: 2,
            },
          ]}
          onPress={() => navigation.navigate('Rubric Text')}>
          <Text
            style={[
              tailwind('text-base'),
              {
                color: '#81BBE3',
              },
            ]}>
            Add Text
          </Text>
        </Pressable>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 flex-1 justify-center items-center rounded ml-4 mr-4',
            ),
            {
              borderColor: '#81BBE3',
              borderWidth: 2,
            },
          ]}
          onPress={() => navigation.navigate('Rubric Photos')}>
          <Text
            style={[
              tailwind('text-base'),
              {
                color: '#81BBE3',
              },
            ]}>
            Add Image
          </Text>
        </Pressable>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 flex-1 justify-center items-center rounded ml-4 mr-4',
            ),
            {
              borderColor: '#81BBE3',
              borderWidth: 2,
            },
          ]}
          onPress={() => navigation.navigate('Rubric Audio')}>
          <Text
            style={[
              tailwind('text-base'),
              {
                color: '#81BBE3',
              },
            ]}>
            Add Audio
          </Text>
        </Pressable>
      </View>
      <View style={tailwind('flex-col mt-8 w-full')}>
        <View style={tailwind('flex-row w-full items-center')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6 ml-8'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4 text-base')}>
            Item Rubric 2
          </Text>
          <Image
            source={iconDropDown}
            style={tailwind('w-4 h-4 absolute right-8')}
          />
        </View>
        <View
          style={[
            tailwind('flex border-b-2 mt-2 ml-8 mr-8'),
            {
              borderBottomColor: '#999999',
            },
          ]}
        />
      </View>
      <View style={tailwind('flex-row items-center mt-8')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 2</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 2</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 2</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-4')}>
        <View
          style={[
            tailwind('bg-white border-2 rounded w-6 h-6 ml-20'),
            {
              borderColor: '#999999',
            },
          ]}
        />
        <Text style={tailwind('text-black ml-4')}>Sub Item Rubric 2</Text>
      </View>
      <View style={tailwind('flex-row items-center mt-8 ml-4 mr-4')}>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 flex-1 justify-center items-center rounded ml-4 mr-4',
            ),
            {
              borderColor: '#81BBE3',
              borderWidth: 2,
            },
          ]}>
          <Text
            style={[
              tailwind('text-base'),
              {
                color: '#81BBE3',
              },
            ]}>
            Add Text
          </Text>
        </Pressable>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 flex-1 justify-center items-center rounded ml-4 mr-4',
            ),
            {
              borderColor: '#81BBE3',
              borderWidth: 2,
            },
          ]}>
          <Text
            style={[
              tailwind('text-base'),
              {
                color: '#81BBE3',
              },
            ]}>
            Add Image
          </Text>
        </Pressable>
        <Pressable
          style={[
            tailwind(
              'bg-white h-16 flex-1 justify-center items-center rounded ml-4 mr-4',
            ),
            {
              borderColor: '#81BBE3',
              borderWidth: 2,
            },
          ]}>
          <Text
            style={[
              tailwind('text-base'),
              {
                color: '#81BBE3',
              },
            ]}>
            Add Audio
          </Text>
        </Pressable>
      </View>
      <View style={tailwind('flex-col mt-8 w-full')}>
        <View style={tailwind('flex-row w-full items-center')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6 ml-8'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4 text-base')}>
            Global Performance
          </Text>
          <Image
            source={iconDropDown}
            style={tailwind('w-4 h-4 absolute right-8')}
          />
        </View>
        <View
          style={[
            tailwind('flex border-b-2 mt-2 ml-8 mr-8'),
            {
              borderBottomColor: '#999999',
            },
          ]}
        />
      </View>
      <View style={tailwind('flex-row mt-4 ml-8 mr-8')}>
        <View style={tailwind('flex-1 flex-row ml-8 mr-4')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4')}>Observed</Text>
        </View>
        <View style={tailwind('flex-1 flex-row ml-8 mr-4')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4')}>Learner</Text>
        </View>
      </View>
      <View style={tailwind('flex-row mt-4 ml-8 mr-8')}>
        <View style={tailwind('flex-1 flex-row ml-8 mr-4')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4')}>Assisted</Text>
        </View>
        <View style={tailwind('flex-1 flex-row ml-8 mr-4')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4')}>Competent</Text>
        </View>
      </View>
      <View style={tailwind('flex-row mt-4 ml-8 mr-8')}>
        <View style={tailwind('flex-1 flex-row ml-8 mr-4')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4')}>Beginner</Text>
        </View>
        <View style={tailwind('flex-1 flex-row ml-8 mr-4')}>
          <View
            style={[
              tailwind('bg-white border-2 rounded w-6 h-6'),
              {
                borderColor: '#999999',
              },
            ]}
          />
          <Text style={tailwind('text-black ml-4')}>Proficient</Text>
        </View>
      </View>
      <Pressable
        style={[
          tailwind(
            'bg-white justify-center items-center flex mt-8 mb-8 h-12 w-12 self-center border-2',
          ),
          {
            borderColor: '#999999',
            borderRadius: 24,
          },
        ]}
        onPress={() => onButtonClick()}>
        <Image source={iconUp} style={tailwind('h-6 w-6')} />
      </Pressable>
    </ScrollView>
  );
};

export default RubricDetail;
