import React from "react";

type Props = {
  color?: string;
};

const CloseIcon = ({ color = "#FF0000" }: Props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <path
          d="M11.8733 11.8739L22.7959 22.7965"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.7956 11.874L11.8731 22.7966"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default CloseIcon;
