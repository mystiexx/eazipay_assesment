import * as React from "react";

interface ComplianceIconProps {
  props?: any;
  color?: any;
}

const ComplianceIcon: React.FC<ComplianceIconProps> = ({ color, props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke={color || "#515251"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M7.836 2.197c-.054.175-.083.36-.083.553 0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625 0-.193-.03-.378-.083-.553m-4.834 0A1.876 1.876 0 0 1 9.628.875h1.25c.843 0 1.556.556 1.792 1.322m-4.834 0c-.313.018-.625.04-.936.067-.943.078-1.647.88-1.647 1.826v1.785m7.417-3.678c.313.018.625.04.936.067.943.078 1.647.88 1.647 1.826v8.66c0 1.036-.84 1.875-1.875 1.875h-1.875m-6.25-8.75H2.44a.937.937 0 0 0-.937.938v9.375c0 .517.42.937.937.937h8.125c.518 0 .938-.42.938-.938v-1.562m-6.25-8.75h5.312c.518 0 .938.42.938.938v7.812m-6.875-2.5 1.25 1.25 2.5-3.125"
    />
  </svg>
);
export default ComplianceIcon;
