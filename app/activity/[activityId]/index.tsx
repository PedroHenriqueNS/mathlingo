import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { activitiesList } from '~/constants/activities';

export default function Page() {
  const { activityId } = useLocalSearchParams<{ activityId: string }>();

  const activity = activitiesList.find(activity => activity.id === Number(activityId))!


  return (
    <View className='flex-1 gap-5 pb-10 m-6 flex-center'>
      <Text className='text-4xl text-center font-jakarta-extrabold'>{activity.title}</Text>
      <Text className='text-xl text-center font-jakarta-medium-italic'>Começando por &quot;{activity.teoricalContent[0].contentTitle}&quot;</Text>
      <Text className='text-xl text-center font-jakarta-semibold'>Você precisa acertar pelo menos 60% das questões para concluir a atividade.</Text>
      <Text className='text-xl text-center font-jakarta-medium-italic'>Deseja começar a atividade?</Text>

      <View className='flex w-full gap-3 mt-5'>
        <Link href={`/activity/${activityId}/teoricals/${activity.teoricalContent[0].id}`} asChild>
          <Button title='Vamos começar !!' />
        </Link>
        <Link href="/" asChild>
          <Button bordered title='Talvez depois...' />
        </Link>
      </View>
    </View>
  )
}
