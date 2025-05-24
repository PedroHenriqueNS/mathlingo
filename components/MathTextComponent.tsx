import { StyleProp, useColorScheme, ViewStyle } from 'react-native';
// @ts-ignore
import { MathText as MathTextPrimitive } from 'react-native-math-view';

interface MathTextProps {
  value: string;
  direction?: "ltr" | "rtl";
  style?: StyleProp<ViewStyle>;
  config?: { ex: number, em: number }
}
export const MathTextComponent = ({ value, direction = "ltr", style, config }: MathTextProps) => {
  const colorScheme = useColorScheme();

  return (
    <MathTextPrimitive
      value={value}
      style={{ ...(style as object), color: colorScheme === "dark" ? "white" : "black" }}
      direction={direction}
      config={config}
      // CellRendererComponent={<TouchableOpacity />}
      color={colorScheme === "dark" ? "white" : "black"}
    />
  );
};