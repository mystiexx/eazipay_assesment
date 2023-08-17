import * as React from "react";

interface FilterIconProps {
  props?: any;
}

const FilterIcon: React.FC<FilterIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#8D8E8D"
      d="M12.333 4.453V1A.667.667 0 1 0 11 1v3.453a2 2 0 0 0 0 3.76V13a.667.667 0 1 0 1.333 0V8.213a2 2 0 0 0 0-3.76ZM11.667 7a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333Zm-4 1.453V1a.667.667 0 0 0-1.334 0v7.453a2 2 0 0 0 0 3.76V13a.667.667 0 1 0 1.334 0v-.787a2 2 0 0 0 0-3.76ZM7 11a.666.666 0 1 1 0-1.333A.666.666 0 0 1 7 11ZM3 3.12V1a.667.667 0 1 0-1.333 0v2.12a2 2 0 0 0 0 3.76V13A.667.667 0 1 0 3 13V6.88a2 2 0 0 0 0-3.76Zm-.667 2.547a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334Z"
    />
  </svg>
);
export default FilterIcon;
