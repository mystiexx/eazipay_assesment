import * as React from "react";

interface AddEmployeeIconProps {
  props?: any;
}

const AddEmployeeIcon: React.FC<AddEmployeeIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#EA4E4B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.471}
      d="M13.25 5.25v2.5m0 0v2.5m0-2.5h2.5m-2.5 0h-2.5M8.875 4.312a2.813 2.813 0 1 1-5.625 0 2.813 2.813 0 0 1 5.625 0ZM.751 15.03l-.001-.091a5.313 5.313 0 0 1 10.625 0v.091A10.264 10.264 0 0 1 6.061 16.5c-1.942 0-3.76-.537-5.311-1.471Z"
    />
  </svg>
);
export default AddEmployeeIcon;
