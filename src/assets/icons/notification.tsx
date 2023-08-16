import * as React from "react";

interface NotificationProps {
  props?: any;
}

const Notification: React.FC<NotificationProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#8B8B8B"
      d="M14 11.216v-3.18a6 6 0 0 0-5-5.91v-1.09a1 1 0 0 0-2 0v1.09a6 6 0 0 0-5 5.91v3.18a3 3 0 0 0-2 2.82v2a1 1 0 0 0 1 1h3.14a4 4 0 0 0 7.72 0H15a1 1 0 0 0 1-1v-2a3 3 0 0 0-2-2.82ZM4 8.036a4 4 0 0 1 8 0v3H4v-3Zm4 10a2.001 2.001 0 0 1-1.72-1h3.44a2 2 0 0 1-1.72 1Zm6-3H2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1Z"
    />
  </svg>
);
export default Notification;
