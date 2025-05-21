import React from 'react'
import { Text, View } from 'react-native'

interface ITitleContent {
  title: string
}

export default function TitleContent({ title }: ITitleContent) {
  return (
    <View className='flex flex-row items-center justify-around w-full'>
      <View className='flex-1 mx-4 h-[3px] bg-[#616161] rounded' />

      <Text className='text-lg font-jakarta-extrabold text-[#616161]'>{title}</Text>

      <View className='flex-1 mx-4 h-[3px] bg-[#616161] rounded' />
    </View>
  )
}
