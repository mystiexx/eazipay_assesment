import * as React from "react";

interface HeroMenuProps {
  props?: any;
}

const HeroMenu: React.FC<HeroMenuProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#292A29"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.471}
      d="M1.13.75h16.5M1.13 6h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
export default HeroMenu;
