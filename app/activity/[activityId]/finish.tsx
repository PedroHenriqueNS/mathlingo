import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "~/components/Button";
import { Container } from "~/components/Container";
import { activitiesList } from "~/constants/activities";
import { useActivitiesContext } from "~/context/ActivitiesContext";
import { AchievementsRepository } from "~/services/achievements.actions";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Foundation from '@expo/vector-icons/Foundation';
import { ActivitiesRepository } from "~/services/activities.actions";

export default function FinishPage() {
  const { activityId } = useLocalSearchParams<{ activityId: string }>();
  const { actualActivity, onChangeActivity, changeActualSucessActivity, resetActualActivity } = useActivitiesContext()
  const activity = activitiesList.find(activity => activity.id === Number(activityId))!

  const router = useRouter()
  const db = useSQLiteContext();
  const achievementRepository = new AchievementsRepository(db)
  const activitiesRepository = new ActivitiesRepository(db)

  const [isLoading, setIsLoading] = useState(false)
  const [receiveAchievement, setReceiveAchievement] = useState(false)
  const [successRate, setSuccessRate] = useState(0)

  useEffect(() => {
    const runEffect = async () => {
      setIsLoading(true)

      if (!actualActivity) router.navigate('/')

      const totalQuestions = actualActivity!.questionsProgress.length
      const successQuestions = actualActivity!.questionsProgress.filter(question => question.finishSucess === true).length

      let successRate = (successQuestions / totalQuestions) * 100;
      let isSuccessRateHigh = successRate >= 60; // Sucesso se for 60% de acertos

      setSuccessRate(successRate)
      changeActualSucessActivity(Number(activityId), isSuccessRateHigh);

      if (isSuccessRateHigh) {
        await onChangeActivity(async () => {
          await activitiesRepository.updateActivity({
            ...activity,
            isDone: true
          })
        })

        for (const slug of activity.achievementSlugs) {
          let result = await achievementRepository.findAchievementBySlug(slug)
          if (result === null) setReceiveAchievement(true)
        }
      }

      setIsLoading(false)
    }
    runEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!actualActivity) return null;

  if (isLoading) return (
    <Container className="flex-1 flex-center">
      <Text>Loading...</Text>
    </Container>
  )

  if (actualActivity?.finishSuccess) return (
    <Container className="flex-1 gap-8 m-6 mx-12 flex-center">
      <View className="p-10 rounded-full bg-green-500/10">
        <Feather name="check-circle" size={60} color="#22c55e" />
        <View className="absolute right-0 left-auto">
          <FontAwesome name="star" size={40} color="#fbbf24" />
        </View>
      </View>

      <View className="gap-4 flex-center">
        <Text className="w-full text-4xl text-center font-jakarta-extrabold">Parabéns!</Text>
        <Text className="w-full text-xl text-center text-neutral-600 font-jakarta-medium">Você completou a lição com sucesso</Text>
      </View>

      <View className="w-full gap-2 p-5 border-2 rounded-3xl bg-amber-300/10 border-amber-300 flex-center">
        <View className="flex-row gap-4 flex-center">
          <SimpleLineIcons name="trophy" size={24} color="#fbbf24" />
          <Text className="text-lg font-jakarta-bold text-amber-700">Motivação</Text>
        </View>

        <Text className="text-base text-center font-jakarta-semibold-italic text-amber-600">&quot;Continue reforçando seu aprendizado com os próximos temas!!!&quot;</Text>
      </View>

      <View className="flex w-full gap-2">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg font-jakarta-bold text-neutral-700">Precisão</Text>
          <Text className="text-2xl text-green-500 font-jakarta-bold">{successRate.toFixed(0)}%</Text>
        </View>

        <View className="w-full">
          <View className='w-full h-4 rounded-full bg-neutral-300' />

          <View className='absolute flex w-full h-4'>
            <View className='w-full h-full bg-black rounded-full' style={{ width: `${successRate}%` }} />
          </View>
        </View>

        <Text className="w-full text-sm text-center font-jakarta-medium">Você acertou {actualActivity!.questionsProgress.filter(question => question.finishSucess === true).length} de {actualActivity!.questionsProgress.length} questões</Text>
      </View>

      <View className="flex w-full gap-3">
        <Link
          href={receiveAchievement ? `/achievements/unlock-achievements/${activity.id}` : '/'}
          asChild
        >
          <TouchableOpacity
            className="flex-row w-full gap-4 p-4 bg-green-500 flex-center rounded-3xl"
            onPress={() => resetActualActivity()}
          >
            <Feather name="home" size={20} color="white" />
            <Text className="text-lg text-white font-jakarta-bold">{receiveAchievement ? "Continuar" : "Voltar para o menu"}</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          className="flex-row w-full gap-4 p-4 border-2 border-green-500 flex-center rounded-3xl"
          onPress={() => {
            resetActualActivity()
            router.navigate(`/activity/${activityId}/teoricals/${activity.teoricalContent[0].id}`)
          }}
        >
          <Feather name="rotate-ccw" size={20} color="#22c55e" />
          <Text className="text-lg text-green-500 font-jakarta-extrabold">Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )

  if (!actualActivity?.finishSuccess) return (
    <Container className="flex-1 gap-8 m-6 mx-12 flex-center">
      <View className="p-10 rounded-full bg-amber-500/10">
        <Feather name="x-circle" size={60} color="#e63946" />
        <View className="absolute right-0 left-auto">
          <FontAwesome name="heart" size={40} color="#f87171" />
        </View>
      </View>

      <View className="gap-4 flex-center">
        <Text className="w-full text-4xl text-center font-jakarta-extrabold">Quase lá!</Text>
        <Text className="w-full text-xl text-center text-neutral-600 font-jakarta-medium">Não desista, você está aprendendo</Text>
      </View>

      <View className="w-full gap-2 p-5 border-2 border-blue-300 rounded-3xl bg-blue-300/10 flex-center">
        <View className="flex-row gap-4 flex-center">
          <Feather name="target" size={24} color="#1d4ed8" />
          <Text className="text-lg text-blue-700 font-jakarta-bold">Continue tentando</Text>
        </View>

        <Text className="text-base text-center text-blue-600 font-jakarta-semibold-italic">&quot;O sucesso é a soma de pequenos esforços repetidos dia após dia!&quot;</Text>
      </View>

      <View className="flex w-full gap-2">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg font-jakarta-bold text-neutral-700">Precisão</Text>
          <Text className="text-2xl text-errado-500 font-jakarta-bold">{successRate.toFixed(0)}%</Text>
        </View>

        <View className="w-full">
          <View className='w-full h-4 rounded-full bg-neutral-300' />

          <View className='absolute flex w-full h-4'>
            <View className='w-full h-full bg-black rounded-full' style={{ width: `${successRate}%` }} />
          </View>
        </View>

        <Text className="w-full text-sm text-center font-jakarta-medium">Você acertou {actualActivity!.questionsProgress.filter(question => question.finishSucess === true).length} de {actualActivity!.questionsProgress.length} questões</Text>
      </View>

      <View className="w-full gap-2 p-5 border-l-4 border-amber-300 rounded-3xl bg-amber-300/10 flex-center">
        <View className="flex-row gap-4 flex-center">
          <Foundation name="lightbulb" size={24} color="#b45309" />
          <Text className="text-lg text-amber-700 font-jakarta-bold">Dica para melhorar</Text>
        </View>

        <Text className="text-center text-amber-600 font-jakarta-semibold">Revise o conteúdo da lição anterior antes de tentar novamente. A prática leva à perfeição!</Text>
      </View>

      <View className="flex w-full gap-3">
        <TouchableOpacity
          className="flex-row w-full gap-4 p-4 bg-orange-500 flex-center rounded-3xl"
          onPress={() => {
            router.navigate(`/activity/${activityId}/teoricals/${activity.teoricalContent[0].id}`)
            resetActualActivity()
          }}
        >
          <Feather name="rotate-ccw" size={20} color="white" />
          <Text className="text-lg text-white font-jakarta-extrabold">Tentar novamente</Text>
        </TouchableOpacity>

        <Link
          href={'/'}
          asChild
        >
          <TouchableOpacity
            className="flex-row w-full gap-4 p-4 border-2 border-errado-500 flex-center rounded-3xl"
            onPress={() => resetActualActivity()}
          >
            <Feather name="home" size={20} color="#f97316" />
            <Text className="text-lg text-orange-500 font-jakarta-bold">Voltar para o menu</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </Container>
  )

  return null;
}
