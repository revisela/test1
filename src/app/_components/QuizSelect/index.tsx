"use client";
import React from "react";

import styles from "./index.module.css";

export type QuestionTypes = "flashcard" | "mcq" | "fill-in";
interface QuizSelectProps {
  onSelectQuestion: (type: QuestionTypes) => void;
}

const QuizSelect = ({ onSelectQuestion }: QuizSelectProps) => {
  const onSelectQuestionType = (type: QuestionTypes) => {
    onSelectQuestion(type);
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column w-100">
      <div className={styles["card-label"]}>
        <h6>Select a question type!</h6>
      </div>

      <div className="mt-2 d-flex align-items-center justify-content-center gap-3 mb-2 flex-wrap">
        <QuestionTypeCard
          onSelectType={onSelectQuestionType}
          type="flashcard"
        />
        <QuestionTypeCard onSelectType={onSelectQuestionType} type="mcq" />
        <QuestionTypeCard onSelectType={onSelectQuestionType} type="fill-in" />
      </div>
    </div>
  );
};

export default QuizSelect;

interface QuestionTypeCardProps {
  type: QuestionTypes;
  onSelectType?: (type: QuestionTypes) => void;
  isSmall?: boolean;
}
export const QuestionTypeCard = ({
  type,
  onSelectType,
  isSmall,
}: QuestionTypeCardProps) => {
  switch (type) {
    case "flashcard":
      return (
        <div
          onClick={() => onSelectType && onSelectType(type)}
          className={`${styles["question-type-card"]} ${styles[type]} ${
            isSmall && styles.small
          }`}
        >
          <h5>Flashcard</h5>
        </div>
      );
    case "mcq":
      return (
        <div
          onClick={() => onSelectType && onSelectType(type)}
          className={`${styles["question-type-card"]} ${styles[type]} ${
            isSmall && styles.small
          }`}
        >
          <h5>Multiple Choice Question (MCQ)</h5>
        </div>
      );
    default:
      return (
        <div
          onClick={() => onSelectType && onSelectType(type)}
          className={`${styles["question-type-card"]} ${styles[type]} ${
            isSmall && styles.small
          }`}
        >
          <h5>Fill-In</h5>
        </div>
      );
  }
};
