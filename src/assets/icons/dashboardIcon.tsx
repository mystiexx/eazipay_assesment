import * as React from "react";

interface DashboardIconProps {
  props?: any;
  color?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({ color, props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={color || "#11453B"}
      d="M20.368 7.26c-.077.226-.135.462-.236.669-.41.814-1.079 1.271-1.984 1.29-1.594.03-3.188.024-4.776.005a2.263 2.263 0 0 1-2.215-2.215c-.02-1.594-.02-3.187 0-4.781A2.267 2.267 0 0 1 13.372.013c1.593-.02 3.187-.014 4.776 0 1.05.01 1.936.77 2.172 1.81.01.054.033.102.052.155-.004 1.757-.004 3.52-.004 5.282ZM2.355 19.99c-.13-.038-.255-.072-.385-.115-.905-.294-1.57-1.151-1.58-2.11-.014-1.593-.019-3.187 0-4.78a2.267 2.267 0 0 1 2.216-2.215c1.593-.02 3.187-.02 4.776 0a2.26 2.26 0 0 1 2.215 2.215c.019 1.593.019 3.187 0 4.78-.01 1.05-.78 1.95-1.81 2.172-.054.01-.102.034-.155.048-1.757.005-3.515.005-5.277.005ZM15.278 19.99c-.486-.144-.996-.235-1.459-.438-1.868-.833-2.908-2.802-2.619-4.877.27-1.931 1.878-3.549 3.828-3.852a4.61 4.61 0 0 1 5.296 3.943c.005.044.03.087.044.135v.963c-.015.043-.034.087-.044.135-.322 1.921-1.41 3.187-3.255 3.804-.27.091-.553.13-.832.197-.318-.01-.64-.01-.959-.01ZM9.606 4.64c0 .737.005 1.474 0 2.21-.004 1.387-.991 2.374-2.378 2.379-1.488.005-2.976.005-4.468 0C1.383 9.224.39 8.232.386 6.85.38 5.363.38 3.87.386 2.382.39.995 1.383.004 2.764.004a691.09 691.09 0 0 1 4.469 0C8.615.008 9.606.995 9.61 2.382c0 .751-.005 1.502-.005 2.258Z"
    />
  </svg>
);
export default DashboardIcon;
