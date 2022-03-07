import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import iconBack from '../../assets/icons/ic_signin_back.png';
import {useTailwind} from 'tailwind-rn';
import { useNavigation } from "@react-navigation/native";

const IncidentsTerms = () => {
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
            'flex bg-white mt-8 ml-8 h-8 w-8 justify-center items-center rounded-full',
          ),
          {
            elevation: 3,
          },
        ]}
        onPress={() => navigation.goBack()}>
        <Image source={iconBack} style={tailwind('h-4 w-4 mr-1')} />
      </Pressable>
      <Text style={tailwind('mt-4 text-center text-black font-bold text-lg')}>
        Incident
      </Text>
      <Text style={tailwind('text-center text-black text-sm mt-2')}>
        Please read this term and condition
      </Text>
      <Text style={tailwind('ml-8 mr-8 mt-8 text-justify text-black text-sm')}>
        Fitur ini digunakan untuk keperluan yang benar - benar serius. Oleh
        Karena itu pastikan apa yang akan anda laporkan adalah hal yang benar -
        benar penting. Data disini akan muncul langsung di prodi tanpa diketahui
        orang lain. Fitur ini digunakan untuk keperluan yang benar - benar
        serius. Oleh Karena itu pastikan apa yang akan anda laporkan adalah hal
        yang benar - benar penting. Data disini akan muncul langsung di prodi
        tanpa diketahui orang lain. Fitur ini digunakan untuk keperluan yang
        benar - benar serius. Oleh Karena itu pastikan apa yang akan anda
        laporkan adalah hal yang benar - benar penting. Data disini akan muncul
        langsung di prodi tanpa diketahui orang lain. Fitur ini digunakan untuk
        keperluan yang benar - benar serius. Oleh Karena itu pastikan apa yang
        akan anda laporkan adalah hal yang benar - benar penting. Data disini
        akan muncul langsung di prodi tanpa diketahui orang lain.
      </Text>
      <Pressable
        style={[
          tailwind(
            'h-16 ml-20 self-center rounded flex justify-center items-center absolute bottom-10',
          ),
          {
            backgroundColor: '#54A3DA',
            width: '70%',
          },
        ]}
        onPress={() => navigation.navigate('Incident Report')}>
        <Text style={tailwind('text-white font-bold')}>Agree</Text>
      </Pressable>
    </View>
  );
};

export default IncidentsTerms;
