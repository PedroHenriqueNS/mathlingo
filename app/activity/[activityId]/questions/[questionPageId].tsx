import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { Container } from "~/components/Container";
import { activitiesList } from "~/constants/activities";
import ActivityHeader from "../_components/ActivityHeader";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MathViewComponent } from "~/components/MathViewComponent";
import { useState } from "react";
import { useActivitiesContext } from "~/context/ActivitiesContext";
import ContinueButtonDrawer from "./_components/ContinueButtonDrawer";

import { useAssetsContext } from "~/context/ImagesContext";
import { imagesList } from "~/constants/images";

export default function Page() {
  const { activityId, questionPageId } = useLocalSearchParams<{ activityId: string, questionPageId: string }>();
  const { changeActualActivityQuestion } = useActivitiesContext()
  const { images } = useAssetsContext()
  const router = useRouter()

  const [hitQuestion, setHitQuestion] = useState(false)
  const [hitRightQuestion, setHitRightQuestion] = useState(false)
  const [alternativeHitId, setAlternativeHitId] = useState<number | null>(null)
  const [questionHitId, setQuestionHitId] = useState<number | null>(null)

  const activity = activitiesList.find(activity => activity.id === Number(activityId))!
  const content = activity.questionContent[Number(questionPageId)]

  const totalPages = activity.teoricalContent.length + activity.questionContent.length
  const passedPages = activity.teoricalContent.length + (Number(questionPageId) || 0)

  const hasNextPage = !((activity.questionContent.length - 1) === Number(questionPageId))

  const onHitAlternative = (id: number) => {
    setAlternativeHitId(id)
    setHitRightQuestion(content.alternatives[id].isAlternativaCerta)

    setQuestionHitId(id)
    setHitQuestion(true)
  }

  const submitQuestion = async () => {
    const linkNextPage = hasNextPage
      ? `/activity/${activityId}/questions/${activity.questionContent[Number(questionPageId) + 1].id}`
      : `/activity/${activityId}/finish`

    changeActualActivityQuestion(Number(questionPageId), hitRightQuestion)

    router.navigate(linkNextPage as `/activity/${string}/questions/${number}` | `/activity/${string}/finish`)
  }

  return (
    <Container className='flex-1'>
      <ActivityHeader actual={passedPages} total={totalPages} />

      <View className='flex justify-between flex-1'>
        <View className='flex gap-[10px] m-8 mt-4 mb-2 flex-1'>
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

              if (paragraph.type === "Imagem") {

                return <View key={paragraph.id} className="flex">
                  <Image
                    source={images?.[imagesList.find(image => image.id === paragraph.text)?.assetId ?? 0]}
                    resizeMode="stretch"
                    width={10}
                  />
                </View>
              }
              return null
            })}
          </ScrollView>
        </View>

        <View className="flex justify-between">
          <View className="flex flex-row flex-wrap items-center gap-4 mx-4 space-y-1 justify-evenly">
            {content.alternatives.map(alternative => (
              <TouchableOpacity
                key={alternative.id}
                onPress={() => onHitAlternative(alternative.id)}
                disabled={hitQuestion}
                className={`
                  mb-4 border-[4px] border-b-[7px] rounded-2xl flex-grow
                  ${hitQuestion
                    ? hitRightQuestion
                      ? questionHitId === alternative.id
                        ? "bg-certo-300 border-certo-600"
                        : "bg-neutral-200 border-neutral-300"
                      : questionHitId === alternative.id
                        ? "bg-errado-200 border-errado-400"
                        : "bg-neutral-200 border-neutral-300"
                    : "bg-neutral-300 border-neutral-400"
                  }
                `}
              >
                {alternative.type === "Texto" ?
                  <Text className='text-lg leading-7 font-jakarta-medium'>{alternative.text}</Text>
                  : <View className='mx-2 my-5 flex-center'>
                    <MathViewComponent math={alternative.text} fontSize={12} />
                  </View>
                }
              </TouchableOpacity>
            ))}
          </View>

          <View className='flex p-4 mt-4 rounded-t-2xl bg-background-light'
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -20 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              // elevation: 10
            }}
          >
            <ContinueButtonDrawer
              activityId={Number(activityId)}
              questionId={Number(questionPageId)}
              alternativeHitId={alternativeHitId}
              hitQuestion={hitQuestion}
              hitRightQuestion={hitRightQuestion}
              submitQuestion={submitQuestion}
            />
          </View>
        </View>
      </View>
    </Container>
  )
}
