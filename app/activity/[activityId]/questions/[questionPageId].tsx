import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Container } from "~/components/Container";
import { activitiesList } from "~/constants/activities";
import ActivityHeader from "../_components/ActivityHeader";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MathViewComponent } from "~/components/MathViewComponent";
import { MathTextComponent } from "~/components/MathTextComponent";
import { useState } from "react";

export default function Page() {
  const { activityId, questionPageId } = useLocalSearchParams<{ activityId: string, questionPageId: string }>();

  const [hitQuestion, setHitQuestion] = useState(false)
  const [hitRightQuestion, setHitRightQuestion] = useState(false)
  const [questionHitId, setQuestionHitId] = useState<number | null>(null)

  const activity = activitiesList.find(activity => activity.id === Number(activityId))!
  const content = activity.questionContent[Number(questionPageId)]

  const totalPages = activity.teoricalContent.length + activity.questionContent.length
  const passedPages = activity.teoricalContent.length + (Number(questionPageId) || 0)

  const hasNext = !((activity.questionContent.length - 1) === Number(questionPageId))

  const linkNextPage = hasNext
    ? `/activity/${activityId}/questions/${activity.questionContent[Number(questionPageId) + 1].id}`
    : `/activity/${activityId}/finish`

  const onHitAlternative = (id: number) => {
    if (content.alternatives[id].isAlternativaCerta) setHitRightQuestion(true)
    else setHitRightQuestion(false)

    setQuestionHitId(id)
    setHitQuestion(true)
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
                  <MathViewComponent math={paragraph.text} config={{ em: 15, ex: 15 }} />
                </View>

              if (paragraph.type === "Texto-Math")
                return <MathTextComponent key={paragraph.id} value={paragraph.text} config={{ em: 15, ex: 15 }} />

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
                  px-4 py-1 mb-4 border-[4px] border-b-[7px] rounded-2xl flex-grow
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
                  : alternative.type === "Math" ?
                    <View className='my-5 flex-center'>
                      <MathViewComponent math={alternative.text} config={{ em: 10, ex: 10 }} />
                    </View>
                    : <MathTextComponent value={alternative.text} config={{ em: 10, ex: 10 }} />
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
            {hitQuestion && !hitRightQuestion
              ? <View className="flex flex-row gap-3 justify-evenly">
                <Link href={`/activity/${activityId}/teoricals/0`} asChild>
                  <TouchableOpacity
                    className={`border-[3px] border-b-[5px] rounded-[13px] shadow-md p-2 flex-grow flex-center bg-amber-400 border-thirty-200`}
                    onPress={() => {
                      setQuestionHitId(0)
                      setHitQuestion(false)
                      setHitRightQuestion(false)
                    }}
                  >
                    <Text className='text-2xl text-white font-jakarta-extrabold'>Voltar para teoria</Text>
                  </TouchableOpacity>
                </Link>

                <TouchableOpacity
                  className={`border-[3px] border-b-[5px] rounded-[13px] shadow-md p-2 flex-grow flex-center bg-secondary-500 border-secondary-300`}
                  onPress={() => {
                    setQuestionHitId(0)
                    setHitQuestion(false)
                    setHitRightQuestion(false)
                  }}
                >
                  <Text className='text-2xl text-white font-jakarta-extrabold'>Tentar de novo</Text>
                </TouchableOpacity>
              </View>
              : null
            }


            {hitQuestion && !hitRightQuestion
              ? null
              : <Link href={linkNextPage} asChild disabled={!hitRightQuestion}>
                <TouchableOpacity
                  className={
                    `border-[3px] border-b-[5px] rounded-[13px] shadow-md p-2 flex-center
                      ${hitRightQuestion ? 'bg-certo-600 border-certo-500' : 'bg-neutral-500/60 border-neutral-300/60'}
                    `}
                  disabled={!hitRightQuestion}
                >
                  <Text className='text-2xl text-white font-jakarta-extrabold'>Próximo</Text>
                </TouchableOpacity>
              </Link>
            }
          </View>
        </View>
      </View>
    </Container>
  )
}
