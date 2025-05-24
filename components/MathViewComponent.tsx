import { StyleProp, useColorScheme, ViewStyle } from 'react-native';
// @ts-ignore
import MathView from 'react-native-math-view';

interface MathViewProps {
  math: string;
  style?: StyleProp<ViewStyle>;
  config?: { ex: number, em: number }
}

export const MathViewComponent = ({ math, style, config }: MathViewProps) => {
  const colorScheme = useColorScheme();

  return (
    <MathView
      math={math}
      config={config}
      style={{ ...(style as object), color: colorScheme === "dark" ? "white" : "black" }}
    />
  );
};