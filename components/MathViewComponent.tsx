import { StyleProp, useColorScheme, ViewStyle } from 'react-native';
// @ts-ignore
import MathView from 'react-native-math-view';

interface MathViewProps {
  math: string;
  style?: StyleProp<ViewStyle>;
}

export const MathViewComponent = ({ math, style }: MathViewProps) => {
  const colorScheme = useColorScheme();

  return (
    <MathView
      math={math}
      style={{ ...(style as object), color: colorScheme === "dark" ? "white" : "black" }}
    />
  );
};