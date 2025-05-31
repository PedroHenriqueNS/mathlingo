import { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Drawer, DrawerBackdrop, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '~/components/ui/drawer';
import { MathViewComponent } from '~/components/MathViewComponent';
import { activitiesList } from '~/constants/activities';

interface IContinueButtonDrawer {
  activityId: number;
  questionId: number;
  alternativeHitId: number | null;
  hitQuestion: boolean;
  hitRightQuestion: boolean;
  submitQuestion: () => Promise<void>;
}

const ContinueButtonDrawer = ({
  activityId,
  questionId,
  alternativeHitId,
  hitQuestion,
  hitRightQuestion,
  submitQuestion
}: IContinueButtonDrawer) => {

  const activity = activitiesList.find(activity => activity.id === activityId)!
  const question = activity.questionContent.find(questionContent => questionContent.id === questionId)!
  const rightAlternative = question.alternatives.filter(alternativeContent => alternativeContent.isAlternativaCerta === true)[0]

  const [isOpen, setIsOpen] = useState(hitQuestion)

  useEffect(() => {
    setIsOpen(hitQuestion)
  }, [hitQuestion])

  return (
    <>
      <TouchableOpacity disabled className='border-[3px] border-b-[5px] rounded-[13px] shadow-md p-2 flex-center bg-neutral-500/60 border-neutral-300/60'>
        <Text className='text-2xl text-white font-jakarta-extrabold'>Próximo</Text>
      </TouchableOpacity>

      <Drawer
        isOpen={isOpen}
        size="sm"
        anchor="bottom"
      // onClose={() => {
      //   if (!hitRightQuestion) setIsOpen(false);
      // }}
      >
        <DrawerBackdrop opacity={0.2} />

        <DrawerContent
          className="!space-y-1 border-0 rounded-t-3xl bg-background-light"
          style={{
            backgroundColor: '#F1F1F1',
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -20 },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            elevation: 10
          }}
        >
          <DrawerHeader className="flex flex-row items-center justify-start gap-5">
            {hitRightQuestion
              ? <FontAwesome name="check-circle" size={30} color="#05ab80" />
              : <FontAwesome name="times-circle" size={30} color="#e63946" />
            }
            <Text
              className={`
              text-2xl font-jakarta-extrabold text-secondary-500
              ${hitRightQuestion ? '!text-certo-600' : '!text-errado-500'}
            `}
            >
              {hitRightQuestion ? 'Correto' : 'Incorreto'}
            </Text>
          </DrawerHeader>

          <DrawerBody className='space-y-3'>
            <Text className={`text-xl font-jakarta-bold mb-1`}>
              Resposta correta:
            </Text>

            {rightAlternative.type === "Texto"
              ? <Text className='text-lg leading-7 font-jakarta-medium'>{rightAlternative.text}</Text>
              : <MathViewComponent math={rightAlternative.text} fontSize={14} />
            }
          </DrawerBody>

          <DrawerFooter className='mb-4'>
            <TouchableOpacity
              className={`
                  border-[3px] border-b-[5px] rounded-[13px] shadow-md p-2 flex-grow flex-center
                  ${hitRightQuestion ? 'bg-certo-600 border-certo-500' : 'bg-errado-500 border-errado-300'}
                `}
              onPress={submitQuestion}
            >
              <Text className='text-2xl text-white font-jakarta-extrabold'>Próximo</Text>
            </TouchableOpacity>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default ContinueButtonDrawer