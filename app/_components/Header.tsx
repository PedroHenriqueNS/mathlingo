import { Text, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AchievementsDrawer from '~/components/AchievementsDrawer';
import { useEffect, useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';
import { AchievementsRepository } from '~/services/achievements.actions';
import { FiresRepository } from '~/services/fires.actions';
import FiresDrawer from '~/components/FiresDrawer';

export default function Header() {

  const [fires, setFires] = useState(0)
  const [achievements, setAchievements] = useState(0)

  const db = useSQLiteContext();
  const firesRepository = new FiresRepository(db)
  const achievementRepository = new AchievementsRepository(db)

  useEffect(() => {
    const getCount = async () => {
      const firesCount = await firesRepository.getCountOfFires();
      const achievementsCount = await achievementRepository.getCountOfAchievements();

      setFires(firesCount)
      setAchievements(achievementsCount)
    }
    getCount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db])

  return (
    <View className='flex flex-row items-center h-16 justify-evenly'>
      <FiresDrawer>
        <View className='flex-row h-full gap-3 px-2 flex-center'>
          <FontAwesome5 name="fire-alt" size={24} color="#ffa500" />
          <Text className='text-lg font-jakarta-extrabold text-thirty-500'>{fires}</Text>
        </View>
      </FiresDrawer>

      <AchievementsDrawer>
        <View className='flex-row h-full gap-3 px-2 flex-center'>
          <FontAwesome5 name="trophy" size={24} color="#3b82f6" />
          <Text className='text-lg font-jakarta-extrabold text-secondary-500'>{achievements}</Text>
        </View>
      </AchievementsDrawer>
    </View>
  )
}
