import Svg, { Polyline, Rect } from "react-native-svg"

export const PolynomialAchievementSvg = ({ size = 200 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" id="sigma-square-2">
      <Polyline
        id="secondary"
        points="16 9 16 8 8 8 12 12 8 16 16 16 16 15"
        stroke="rgb(44, 169, 188)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        fill="none"
      />

      <Rect
        id="primary"
        x="3"
        y="3"
        width="18"
        height="18"
        rx="1"
        stroke="rgb(0, 0, 0)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  )
}