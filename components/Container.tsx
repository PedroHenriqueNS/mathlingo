import { Platform, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IContainer {
  children: React.ReactNode;
  className?: string;
  hasStyles?: boolean;
}

export const Container = ({ children, hasStyles = true, className = "flex flex-1 m-6" }: IContainer) => {
  const insets = useSafeAreaInsets()

  return <SafeAreaView
    style={{
      paddingTop: Platform.OS === "android" ? insets.top : 0,
      paddingBottom: Platform.OS === "android" ? insets.bottom : 0
    }}
    className={hasStyles ? className : undefined}
  >
    {children}
  </SafeAreaView>;
};

// const styles = {
//   container: 'flex flex-1 m-6',
// };
