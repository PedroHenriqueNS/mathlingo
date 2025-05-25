import { Stack } from 'expo-router'
import { View } from 'react-native'
import { Container } from '~/components/Container'
import Header from './_components/Header'
import TitleContent from './_components/TitleContent'
import { activitiesList } from '~/constants/activities'
import ActivityButton from './_components/ActivityButton'

export default function index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Container>
        <Header />

        <View className='flex gap-4'>
          <TitleContent title="Atividades de Matemática" />

          <View className='flex gap-2'>
            {activitiesList.map(activity => (
              <ActivityButton key={activity.id} activity={activity} />
            ))}
          </View>
        </View>
      </Container>
    </>
  )
}
