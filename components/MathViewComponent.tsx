import { StyleProp, ViewStyle } from 'react-native';
import MathJax from 'react-native-mathjax-svg'

interface MathViewProps {
  math: string;
  style?: StyleProp<ViewStyle>;
  fontSize?: number
}

export const MathViewComponent = ({ math, style, fontSize }: MathViewProps) => {
  // const colorScheme = useColorScheme();

  // return null;
  return <MathJax
    style={style}
    fontSize={fontSize}
  >
    {math}
  </MathJax>

  // return (
  //   <MathView
  //     math={math}
  //     config={config}
  //     style={{ ...(style as object), color: colorScheme === "dark" ? "white" : "black" }}
  //     editable
  //   />
  // );
};