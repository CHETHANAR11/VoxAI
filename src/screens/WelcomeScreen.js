import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { pixelRatio } from 'nativewind'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation=useNavigation();
  return (
    <SafeAreaView className='flex-1 flex justify-around bg-white'>
      <View className='space-y-2'>
        <Text className='text-center tracking-wide text-gray-700 font-extrabold'>
          AYGEN
        </Text>
        <Text className='text-center font-thin text-4xl text-gray-500'>
          Future power
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image source={require('../../assets/images/welcome.png') } style={{width:wp(75),height:wp(75)}} />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-emerald-600 mx-9 p-4 rounded-2xl">
        <Text style={{fontSize:wp(6)}}className="text-center font-bold text-white text-2xl">Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
