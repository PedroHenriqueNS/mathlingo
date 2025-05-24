import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { activitiesList } from '~/constants/activities';

export default function Page() {
  const { activityId } = useLocalSearchParams<{ activityId: string }>();

  const activity = activitiesList.find(activity => activity.id === Number(activityId))!


  return (
    <View className='flex-1 pb-10 m-6 flex-center'>
      <Text className='text-4xl font-jakarta-extrabold'>{activity.title}</Text>
      <Text className='mt-5 text-xl font-jakarta-medium-italic'>Começando por &quot;{activity.teoricalContent[0].contentTitle}&quot;</Text>
      <Text className='text-xl font-jakarta-medium-italic'>Deseja começar a atividade?</Text>

      <Link className='mt-10' href={`/activity/${activityId}/teoricals/${activity.teoricalContent[0].id}`} asChild>
        <Button title='Vamos começar !!' />
      </Link>
    </View>
  )
}
