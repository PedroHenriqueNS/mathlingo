import { Link } from 'expo-router';
import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { useActivitiesContext } from '~/context/ActivitiesContext';

interface IActivityButton {
  activity: TActivityConst
}

const ActivityButton = ({ activity }: IActivityButton) => {

  const { isActivityDone } = useActivitiesContext()

  const isDone = isActivityDone(activity.id)

  return (
    <Link href={`/activity/${String(activity.id)}`} push asChild>
      <TouchableOpacity
        className={`${styles.button} ${isDone && '!bg-certo-600 !border-certo-500'}`}
      >
        <Text className={styles.buttonText}>{activity.title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = {
  button: 'bg-primary-500 border-primary-400 border-[3px] border-b-[5px] rounded-[13px] shadow-md w-full p-4 px-10',
  buttonText: 'text-white text-lg font-jakarta-extrabold',
};

export default ActivityButton;