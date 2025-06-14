import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { achievementsList } from '~/constants/achievements';
import { activitiesList } from '~/constants/activities';
import { AchievementsRepository } from '~/services/achievements.actions';

export default function Page() {
  const { activityId } = useLocalSearchParams<{ activityId: string }>();
  const activity = activitiesList.find(activity => activity.id === Number(activityId))!

  const router = useRouter()
  const db = useSQLiteContext();
  const achievementRepository = new AchievementsRepository(db)

  if (!activity) router.navigate("/")

  const [newAchievements, setNewAchievements] = useState<TAchivementsConst[]>([])

  const achievements = achievementsList
    .filter(achievement => activity.achievementSlugs.includes(achievement.slug))!

  if (achievements.length === 0) router.navigate('/')

  useEffect(() => {
    const processNewAchievements = async () => {
      const pushNewAchievements = []

      for (const slug of activity.achievementSlugs) {
        let result = await achievementRepository.findAchievementBySlug(slug)
        if (result === null) pushNewAchievements.push(
          achievements.find(achievement => achievement.slug === slug)!
        )
      }

      if (pushNewAchievements.length > 0) setNewAchievements(pushNewAchievements)
      else router.navigate('/')

      for (const achievement of pushNewAchievements) {
        await achievementRepository.insertAchievement({
          id: achievement.id,
          slug: achievement.slug,
          title: achievement.title,
          description: achievement.description
        })
      }
    }
    processNewAchievements()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="flex-1 gap-10 pb-10 m-6 flex-center">
      <View className='gap-10 flex-center'>
        <Text className='text-4xl font-jakarta-extrabold-italic text-primary-500'>PARABÉNS!!!</Text>

        <Text className='text-center font-jakarta-medium'>
          Ao concluir
          <Text className='font-jakarta-bold'> {activity.title} </Text>
          você recebeu
          <Text className='font-jakarta-bold'> {newAchievements.length} </Text>
          nova{newAchievements.length > 1 && 's'} conquista{newAchievements.length > 1 && 's'}.
        </Text>
      </View>

      <View className='flex flex-row flex-wrap items-center gap-4 mx-4 space-y-1 justify-evenly'>
        {newAchievements.map(achievement => (
          <View
            key={achievement.id}
            className='p-4 px-5 border-[4px] border-b-[10px] flex-center bg-primary-100 border-primary-300 rounded-3xl'
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
            }}
          >
            {achievement.svg}
            <Text className='text-lg font-jakarta-semibold'>{achievement.title}</Text>
          </View>
        ))}
      </View>

      <View className='flex-center'>
        <Link
          href={{
            pathname: "/",
            params: { refreshHeader: Date.now().toString() }
          }}
          asChild>
          <Button title="Voltar para o menu" />
        </Link>
      </View>
    </Container>
  )
}
