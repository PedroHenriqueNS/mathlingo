import { Stack } from 'expo-router'
import React, { useContext } from 'react'
import { View } from 'react-native'
import { Container } from '~/components/Container'
import Header from './_components/Header'
import TitleContent from './_components/TitleContent'
import { PurpleButton } from '~/components/PurpleButton'
import { MathViewComponent } from '~/components/MathViewComponent'
import { MathTextComponent } from '~/components/MathTextComponent'
import { activitiesList } from '~/constants/activities'
import ActivityButton from './_components/ActivityButton'

export default function index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Container>
        <Header />

        <View className='flex gap-4'>
          <TitleContent title="Atividades de Matemática" />

          <View className='flex gap-2'>
            {activitiesList.map(activity => (
              <ActivityButton key={activity.id} activity={activity} />
            ))}
            {/* <PurpleButton title="1. Conteúdo 1" />
            <PurpleButton title="2. Conteúdo 2" />
            <PurpleButton title="3. Conteúdo 3" />
            <PurpleButton title="4. Conteúdo 4" />
            <PurpleButton title="5. Conteúdo 5" /> */}
          </View>

          <MathViewComponent
            math={"g'(\\theta) = \\frac{(-\\sin{\\theta}) \\cdot \\theta - \\cos{\\theta}}{\\cos^{2}{\\theta}}"}
          />
          <MathViewComponent
            math='\cos\left(x\right)=\frac{b}{c}'
          />
          {/* <MathView
            math='\cos\left(x=\frac{b}{c}'
            renderError={({ error }) => <Text style={[{ fontWeight: 'bold' }]}>{error}</Text>}
          /> */}
          <MathTextComponent
            value={`This text includes math notations and should be wrapped correctly for \\( \\alpha \\) and $\\beta$ within the view. \nThe following formula shouldn't be inline:$$x_{1,2} = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$However the following formula should be inline with the text: \\( a^2 + b^2 = c^2 \\)`}
          />
        </View>
      </Container>
    </>
  )
}
