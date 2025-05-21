import React from 'react'
import { Text, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
  return (
    <View className='flex flex-row items-center h-16 justify-evenly'>
      <View className='flex-row h-full gap-3 px-2 flex-center'>
        <FontAwesome5 name="fire-alt" size={24} color="#ffa500" />
        <Text className='text-lg font-jakarta-extrabold text-thirty-500'>10</Text>
      </View>

      <View className='flex-row h-full gap-3 px-2 flex-center'>
        <FontAwesome5 name="trophy" size={24} color="#3b82f6" />
        <Text className='text-lg font-jakarta-extrabold text-secondary-500'>10</Text>
      </View>
    </View>
  )
}
