import * as React from "react";

interface CalenderIconProps {
  props?: any;
}

const CalenderIcon: React.FC<CalenderIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill="#8D8E8D"
      d="M10 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-12h-1v-1a1 1 0 0 0-2 0v1H6v-1a1 1 0 0 0-2 0v1H3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9h16v9Zm0-11H2v-3a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 1 1 1v3Zm-13 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
);
export default CalenderIcon;
