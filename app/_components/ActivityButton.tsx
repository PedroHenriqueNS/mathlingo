import { Link } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { useActivitiesContext } from '~/context/ActivitiesContext';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface IActivityButton {
  activity: TActivityConst
}

const ActivityButton = ({ activity }: IActivityButton) => {

  const { isActivityDone } = useActivitiesContext()

  const isDone = isActivityDone(activity.id)

  return (
    <Link href={`/activity/${String(activity.id)}`} push asChild>
      <TouchableOpacity
        className={`${styles.button}`}
      >
        <Text className={styles.buttonText}>{activity.title}</Text>
        <Text>
          {isDone ? <FontAwesome6 name="check" size={24} color="#06d6a0" /> : null}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = {
  button: 'bg-primary-500 border-primary-400 border-[3px] border-b-[5px] rounded-[13px] shadow-md w-full p-4 px-10 flex-row items-center justify-between',
  buttonText: 'text-white text-lg font-jakarta-extrabold',
};

export default ActivityButton;