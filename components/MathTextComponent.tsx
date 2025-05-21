import { StyleProp, TouchableOpacity, useColorScheme, ViewStyle } from 'react-native';
// @ts-ignore
import { MathText as MathTextPrimitive } from 'react-native-math-view';

interface MathTextProps {
  value: string;
  direction?: "ltr" | "rtl";
  style?: StyleProp<ViewStyle>;
}
export const MathTextComponent = ({ value, direction = "ltr", style }: MathTextProps) => {
  const colorScheme = useColorScheme();

  return (
    <MathTextPrimitive
      value={value}
      style={{ ...(style as object), color: colorScheme === "dark" ? "white" : "black" }}
      direction={direction}
      CellRendererComponent={<TouchableOpacity />}
      color={colorScheme === "dark" ? "white" : "black"}
    />
  );
};