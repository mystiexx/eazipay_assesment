import * as React from "react"

interface SearchIconProps {
    props?: any
}

const SearchIcon:React.FC<SearchIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#11453B"
      d="M20.71 19.29 17 15.61A9 9 0 1 0 15.61 17l3.68 3.68a1.002 1.002 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
    />
  </svg>
)
export default SearchIcon
