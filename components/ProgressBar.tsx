import { View } from 'react-native'

interface IProgressBar {
  actual: number;
  total: number;
}

const ProgressBar = ({ actual, total }: IProgressBar) => {

  const barWidth = (actual * 100) / total

  return (
    <View>
      <View className='w-[16rem] h-5 bg-neutral-500 border-neutral-400 border-[2px] border-b-[3px] rounded-full' />

      <View className='flex w-[16rem] h-5 absolute'>
        <View className='h-full min-w-[5%] bg-certo-600 border-certo-500 border-[2px] border-b-[3px] rounded-full' style={{ width: `${barWidth}%` }} />
      </View>
    </View>
  )
}

export default ProgressBar