import { TouchableOpacity, View } from "react-native";
import ProgressBar from "~/components/ProgressBar";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";

interface IActivityHeader {
  actual: number;
  total: number;
}

const ActivityHeader = ({ actual, total }: IActivityHeader) => {
  return (
    <View className="flex flex-row items-center w-full h-16 bg-background-light">
      <Link href="/" asChild>
        <TouchableOpacity>
          <FontAwesome name="close" size={30} color="black" className="p-2 px-4 ml-5 rounded" />
        </TouchableOpacity>
      </Link>

      <View className="absolute transform -translate-x-1/2 left-1/2">
        <ProgressBar actual={actual} total={total} />
      </View>
    </View>
  )
}

export default ActivityHeader