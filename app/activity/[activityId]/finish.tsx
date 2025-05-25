import { Link, useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Button } from "~/components/Button";
import { Container } from "~/components/Container";
import { activitiesList } from "~/constants/activities";
import { AchievementsRepository } from "~/services/achievements.actions";

export default function FinishPage() {
  const { activityId } = useLocalSearchParams<{ activityId: string }>();
  const activity = activitiesList.find(activity => activity.id === Number(activityId))!

  const db = useSQLiteContext();
  const achievementRepository = new AchievementsRepository(db)

  const [receiveAchievement, setReceiveAchievement] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const checkHasAchievement = async () => {
      setIsLoading(true)
      for (const slug of activity.achievementSlugs) {
        let result = await achievementRepository.findAchievementBySlug(slug)
        if (result === null) setReceiveAchievement(true)
        console.log(result)
      }
      setIsLoading(false)
    }
    checkHasAchievement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="flex-1 pb-10 m-6 flex-center">
      <Text className='my-10 text-4xl font-jakarta-extrabold text-primary-500'>ATIVIDADE CONCLUÍDA</Text>

      <Text className="text-lg text-center font-jakarta-medium-italic">
        Parabéns, você conseguiu concluir a atividade
        <Text className="font-jakarta-bold"> &quot;{activity.title}&quot;</Text>
      </Text>

      <Text className="text-lg text-center font-jakarta-medium-italic">
        Continue reforçando seu aprendizado com os próximos temas!!!
      </Text>

      <Link
        className="mt-10"
        href={receiveAchievement ? `/achievements/unlock-achievements/${activity.id}` : '/'}
        style={{ opacity: isLoading ? 0 : 1 }}
        disabled={isLoading}
        asChild
      >
        <Button title={receiveAchievement ? "Continuar" : "Voltar para o menu"} disabled={isLoading} />
      </Link>
    </Container>
  )
}
