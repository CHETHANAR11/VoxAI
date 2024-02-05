import { View, Text, Image } from 'react-native'
import React from 'react'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height:hp(60)}} className="space-y-4">
      <Text style={{fontSize:wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
      <View className ="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={require('../../assets/images/chatgptIcon.png')}style={{width:wp(8),height:wp(8)}}/>
          <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700"> ChatGPT</Text>
        </View>
        <Text>
        ChatGPT is adept at generating human-like text, answering questions, and engaging in diverse conversations.
        </Text>
      </View>
      <View className ="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={require('../../assets/images/smartaiIcon.png')}style={{width:wp(8),height:wp(8)}}/>
          <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700"> Smart AI</Text>
        </View>
        <Text>
            
SmartAI excels in advanced natural language processing, reasoning, problem-solving, and personalized responses.
        </Text>
      </View>
      <View className ="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={require('../../assets/images/dalleIcon.png')}style={{width:wp(8),height:wp(8)}}/>
          <Text style={{fontSize:wp(4.8)}} className="font-semibold text-gray-700"> DALL-E</Text>
        </View>
        <Text>
        DALL-E excels in generating creative images from textual prompts, demonstrating its versatility in imaginative content creation.
        </Text>
      </View>

    </View>
  )
}