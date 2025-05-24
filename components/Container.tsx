import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';

interface IContainer {
  children: React.ReactNode;
  className?: string;
  hasStyles?: boolean;
}

export const Container = ({ children, hasStyles = true, className = "flex flex-1 m-6" }: IContainer) => {
  return <SafeAreaView className={hasStyles ? className : undefined}>{children}</SafeAreaView>;
};

// const styles = {
//   container: 'flex flex-1 m-6',
// };
