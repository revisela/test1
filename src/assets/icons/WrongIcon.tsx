import React from "react";

type Props = {};

const WrongIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
    >
      <circle
        cx="21"
        cy="21"
        r="15.75"
        fill="#F83F33"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.25 15.75L15.75 26.25"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.25 26.25L15.75 15.75"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WrongIcon;
