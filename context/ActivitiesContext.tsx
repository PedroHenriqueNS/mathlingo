import { useSQLiteContext } from "expo-sqlite";
import { createContext, useContext, useEffect, useState } from "react"
import { activitiesList } from "~/constants/activities";
import { ActivitiesRepository } from "~/services/activities.actions"

type TActivitiesContext = {
  activities: TActivityDB[]
  activitiesRepository: ActivitiesRepository
  actualActivity: TActivityProgress | null
  onChangeActivity: (fn: () => any) => Promise<any>
  isActivityDone: (id: number) => boolean
  changeActualSucessActivity: (activityId: number, finishSuccess: boolean | null) => void
  changeActualActivityQuestion: (questionId: number, finishSucess: boolean | null) => void
  resetActualActivity: () => void
}

const ActivitiesContext = createContext<TActivitiesContext>({
  activities: [],
  activitiesRepository: null as unknown as ActivitiesRepository,
  actualActivity: null,
  onChangeActivity: async () => {},
  isActivityDone: () => false,
  changeActualSucessActivity: () => {},
  changeActualActivityQuestion: () => {},
  resetActualActivity: () => {}
})

const ActivitiesProvider = ({ children }: { children: React.ReactNode }) => {

  const db = useSQLiteContext();
  const activitiesRepository = new ActivitiesRepository(db)

  const [activities, setActivities] = useState<TActivityDB[]>([])
  const [actualActivity, setActualActivity] = useState<TActivityProgress | null>(null)

  const isActivityDone = (id: number) => activities.find(activity => activity.id === id)?.isDone ?? false

  const getActivities = async () => {
    const result = await activitiesRepository.getAllActivities()

    let runAgain = false;
    for (const activityConst of activitiesList) {
      let activityIndex = result?.findIndex(activity => activity.id === activityConst.id)

      if (activityIndex === -1) {
        await activitiesRepository.insertActivity({
          id: activityConst.id,
          title: activityConst.title,
          isDone: false,
        })
        runAgain = true;
      }
    }

    if (runAgain) await getActivities()
    else setActivities(result ?? [])
  }

  const onChangeActivity = async (fn: () => any): Promise<any> => {
    const result = await fn()
    await getActivities()
    return result
  }

  const changeActualSucessActivity = (activityId: number, finishSuccess: boolean | null): void => {
    if (!actualActivity || actualActivity?.activityId !== activityId) {
      const newActualActivity = {
        activityId,
        finishSuccess,
        questionsProgress: []
      }
      setActualActivity(newActualActivity);
    }

    setActualActivity(oldActualActivity => oldActualActivity ? ({
      ...oldActualActivity,
      finishSuccess
    }) : null)
  }

  const changeActualActivityQuestion = (questionId: number, finishSucess: boolean | null): void => {
    if (!actualActivity) return;

    setActualActivity(oldActualActivity => oldActualActivity ? ({
      ...oldActualActivity,
      questionsProgress: [
        ...oldActualActivity.questionsProgress,
        {
          questionId,
          finishSucess
        }
      ]
    }) : null)
  }

  const resetActualActivity = (): void => setActualActivity(null)

  useEffect(() => {
    const runEffect = async () => await getActivities()
    runEffect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ActivitiesContext.Provider value={{
      activities,
      activitiesRepository,
      actualActivity,
      onChangeActivity,
      isActivityDone,
      changeActualSucessActivity,
      changeActualActivityQuestion,
      resetActualActivity
    }}>
      {children}
    </ActivitiesContext.Provider>
  )
}

export default ActivitiesProvider

export const useActivitiesContext = () => useContext(ActivitiesContext)