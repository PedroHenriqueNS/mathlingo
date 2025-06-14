import Svg, { Path } from "react-native-svg"

export const FunctionAchievementSvg = ({ size = 200 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" id="parabolic-function" data-name="Flat Color">
      <Path id="secondary" d="M14,16c-.89,0-3.58,0-4-13A1,1,0,1,1,12,3c.27,8.47,1.59,10.86,2,11,.38-.17,1.7-2.56,2-11A1,1,0,0,1,18,3C17.58,16,14.89,16,14,16Z" fill="rgb(44, 169, 188)" />

      <Path id="primary" d="M5,22a1,1,0,0,1-1-1V20H3a1,1,0,0,1,0-2H4V3A1,1,0,0,1,6,3V18H21a1,1,0,0,1,0,2H6v1A1,1,0,0,1,5,22Z" fill="rgb(0, 0, 0)" />
    </Svg>
  )
}