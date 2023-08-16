import * as React from "react"

interface ArrowProps {
    props?: any
}
const ArrowRight:React.FC<ArrowProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#898989"
      d="m10.59 7.012 4.24 4.29a1.002 1.002 0 0 1 0 1.42l-4.24 4.24a1.002 1.002 0 0 1-1.71-.705 1 1 0 0 1 .29-.705l3.54-3.54-3.54-3.54a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42-.05Z"
    />
  </svg>
)
export default ArrowRight
