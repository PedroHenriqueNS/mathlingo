import { Button, ButtonText } from "@/components/ui/button";
import { Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@/components/ui/drawer";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import { JSX, useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { achievementsList } from "~/constants/achievements";
import { AchievementsRepository } from "~/services/achievements.actions";

interface IAchivementsDrawer {
  children?: React.ReactNode | JSX.Element
}

const AchievementsDrawer = ({ children }: IAchivementsDrawer) => {

  const { refreshHeader } = useLocalSearchParams()

  const [showDrawer, setShowDrawer] = useState(false);
  const [myAchievements, setMyAchievements] = useState<TAchivementsConst[]>([])

  const db = useSQLiteContext();
  const achievementRepository = new AchievementsRepository(db)

  useEffect(() => {
    const getAchievements = async () => {
      const result = await achievementRepository.getAllAchievements()

      if (result) {
        const achievements = result.map(achievementDb =>
          achievementsList.find(achievement => achievement.id === achievementDb.id)!
        )
        setMyAchievements(achievements)
      }
    }
    getAchievements()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db, refreshHeader])

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        {children ? children : <Text>Show Drawer</Text>}
      </TouchableOpacity>

      <Drawer
        isOpen={showDrawer}
        size="lg"
        anchor="bottom"
        onClose={() => {
          setShowDrawer(false);
        }}
      >
        <DrawerBackdrop />

        <DrawerContent
          className="border-0 rounded-t-3xl bg-background-light"
          style={{
            backgroundColor: '#F1F1F1',
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -20 },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            // backgroundColor: '#0000',
            elevation: 10
          }}
        >
          <DrawerHeader className="mb-5 flex-center">
            <Text className="text-4xl text-center leading-[3rem] font-jakarta-extrabold text-secondary-500">Minhas conquistas</Text>
          </DrawerHeader>

          <DrawerBody>
            <View className='flex flex-row flex-wrap items-center gap-4 mx-4 space-y-1 justify-evenly'>
              {myAchievements.map(achievement => (
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

            {myAchievements.length === 0 && <View className="flex items-center justify-center mx-6 mt-10">
              <Text className="text-lg text-center font-jakarta-semibold">Parece que você ainda não possui nenhuma conquista</Text>
            </View>}
          </DrawerBody>

          <DrawerFooter className="mb-5">
            <Button
              className="flex-1 items-center bg-indigo-500 rounded-[28px] shadow-md p-3 h-max"
              onPress={() => {
                setShowDrawer(false);
              }}
            >
              <ButtonText className="text-xl text-white font-jakarta-bold">Fechar</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AchievementsDrawer;