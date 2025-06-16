import { Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@/components/ui/drawer";
import React, { JSX, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Button, ButtonText } from "@/components/ui/button";
import { generateCalendarDays, getDayName, getMonthName } from "~/lib/utils";
import { useFiresContext } from "~/context/FiresContext";

interface IFiresDrawer {
  children: React.ReactNode | JSX.Element
}

const FiresDrawer = ({ children }: IFiresDrawer) => {

  const { fires: myFires } = useFiresContext()

  const [showDrawer, setShowDrawer] = useState(false);

  const calendarDays = generateCalendarDays()
  const weeks = Math.ceil((calendarDays.length) / 7);
  const actualMonth = new Date().getMonth();
  const firesDateArray = myFires.map(fire => {
    const dateFromArray = new Date(fire.date);
    const formattedDateFromArray = new Date(
      Date.UTC(
        dateFromArray.getUTCFullYear(),
        dateFromArray.getUTCMonth(),
        dateFromArray.getUTCDate(),
        3, // Set hours to 00:00:00.000Z to match the second date
        0,
        0,
        0
      )
    ).toISOString();
    return formattedDateFromArray;
  })

  console.log(firesDateArray, calendarDays[28])
  console.log(firesDateArray.includes(new Date(calendarDays[28]).toISOString()))

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
            <Text className="text-4xl text-center leading-[3rem] font-jakarta-extrabold text-thirty-500">Foguinhos diários</Text>
          </DrawerHeader>

          <DrawerBody>
            <View className='flex flex-row items-center justify-around w-full mb-5'>
              <View className='flex-1 mx-6 h-[2px] bg-neutral-400 rounded' />

              <Text className='text-lg font-jakarta-bold'>{getMonthName(actualMonth)}</Text>

              <View className='flex-1 mx-6 h-[2px] bg-neutral-400 rounded' />
            </View>

            <View className='flex flex-row flex-wrap items-center gap-4 p-10 pt-5 mx-4 space-y-1 rounded-lg justify-evenly bg-neutral-200 '>
              {/* {myFires.map(achievement => (
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
              ))} */}

              <View className="flex-row w-full gap-3 flex-center">
                {calendarDays.slice(0, 7).map((day, i) => (
                  <Text key={i} className="text-lg leading-loose text-center size-10 font-jakarta-semibold">{getDayName(day)[0]}</Text>
                ))}
              </View>

              <View className="flex w-full gap-2">
                {Array(weeks).fill(null).map((_, i) => (
                  <View key={i} className="flex-row w-full gap-3 flex-center">
                    {calendarDays.slice(i === 0 ? 0 : (7 * i), 7 * (i + 1)).map((day, j) => (
                      <Text
                        key={j}
                        className={`
                          text-lg leading-loose text-center size-10 font-jakarta-semibold rounded-full border border-neutral-300
                          ${actualMonth !== day.getMonth() && 'text-neutral-400 border-neutral-200'}
                          ${firesDateArray.includes(new Date(day).toISOString()) && 'bg-amber-400'}
                          ${actualMonth !== day.getMonth() && firesDateArray.includes(new Date(day).toISOString()) && 'text-neutral-400 bg-amber-200'}
                        `}
                      >
                        {day.getDate()}
                      </Text>
                    ))}
                    {/* <Text>{i === 0 ? 0 : (7 * i)} | {7 * (i + 1)}</Text> */}
                  </View>
                ))}
              </View>
            </View>
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
  )
}

export default FiresDrawer