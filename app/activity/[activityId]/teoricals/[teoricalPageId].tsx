import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Container } from '~/components/Container'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useLocalSearchParams } from 'expo-router';
import { activitiesList } from '~/constants/activities';
import { MathViewComponent } from '~/components/MathViewComponent';
import { useState, useEffect } from 'react';
import ActivityHeader from '../_components/ActivityHeader';
import { useActivitiesContext } from '~/context/ActivitiesContext';
import { useAssetsContext } from '~/context/ImagesContext';
import { imagesList } from '~/constants/images';

export default function Page() {
  const { activityId, teoricalPageId } = useLocalSearchParams<{ activityId: string, teoricalPageId: string }>();
  const { changeActualSucessActivity } = useActivitiesContext()
  const { images } = useAssetsContext()

  const activity = activitiesList.find(activity => activity.id === Number(activityId))!
  const content = activity.teoricalContent[Number(teoricalPageId)]

  const [canContinue, setCanContinue] = useState(false)

  const isNextTeorical = !((activity.teoricalContent.length - 1) === Number(teoricalPageId))
  const linkNextPage = isNextTeorical
    ? `/activity/${activityId}/teoricals/${activity.teoricalContent[Number(teoricalPageId) + 1].id}`
    : `/activity/${activityId}/questions/${activity.questionContent[0].id}`

  useEffect(() => {
    const timer = setTimeout(() => setCanContinue(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const runEffect = async () => changeActualSucessActivity(Number(activityId), null)
    runEffect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalPages = activity.teoricalContent.length + activity.questionContent.length
  const passedPages = (Number(teoricalPageId) || 0)

  return (
    <Container className='flex-1'>
      <ActivityHeader actual={passedPages} total={totalPages} />

      <View className='flex justify-between flex-1'>
        <View className='flex gap-[10px] m-8 mt-4 mb-0 flex-1'>
          <View className='flex flex-row items-center gap-5'>
            <FontAwesome name="caret-right" size={30} color="#6366F1" />

            <Text className='text-xl font-jakarta-bold'>{content.contentTitle}</Text>
          </View>

          <ScrollView className='flex-1'>
            {content.paragraphs.map(paragraph => {
              if (paragraph.type === "Texto")
                return <Text key={paragraph.id} className='text-lg leading-7 font-jakarta-medium'>{paragraph.text}</Text>

              if (paragraph.type === "Math")
                return <View key={paragraph.id} className='my-5 flex-center'>
                  <MathViewComponent math={paragraph.text} fontSize={15} />
                </View>

              if (paragraph.type === "Imagem")
                return <View key={paragraph.id} className="flex max-h-[20rem]">
                  <Image
                    source={images?.[imagesList.find(image => image.id === paragraph.text)?.assetId ?? 0]}
                    resizeMode="contain"
                    style={{ width: '100%', height: '100%' }}
                  />
                </View>

              return null
            })}
          </ScrollView>
        </View>

        <View className='flex w-full p-4 rounded-t-2xl bg-background-light'
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -20 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            // elevation: 10
          }}
        >
          <Link href={linkNextPage as `/activity/${string}/teoricals/${string}` | `/activity/${string}/questions/${string}`} asChild>
            <TouchableOpacity
              className={
                `border-[3px] border-b-[5px] rounded-[13px] shadow-md p-2 flex-center
            ${canContinue ? 'bg-certo-600 border-certo-500' : 'bg-neutral-500/60 border-neutral-300/60'}
          `}
            >
              <Text className='text-2xl text-white font-jakarta-extrabold'>Continuar</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </Container>
  )
}
