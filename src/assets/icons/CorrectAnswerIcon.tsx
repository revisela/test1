import React from "react";

type Props = {};

const CorrectAnswerIcon = (props: Props) => {
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
        fill="#00B81D"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.25 19.8619L19.25 26.8619L29.75 16.3624"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CorrectAnswerIcon;
