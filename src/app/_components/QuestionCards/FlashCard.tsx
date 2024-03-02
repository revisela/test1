"use client";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";
import { QuestionTypeCard } from "../QuizSelect";
import Input from "@revisela/components/lib/Input";
import styles from "./index.module.css";

interface FlashCardProps {
  register: UseFormRegister<any>;
  quizIndex: number;
}

const FlashCard = ({ register, quizIndex }: FlashCardProps) => {
  return (
    <div>
      <div className={styles["flashcard-container"]}>
        <Form.Group className="d-flex align-items-center justify-content-center gap-2">
          <Input
            {...register(`quizes.${quizIndex}.flashCard.question` as const, {
              required: true,
            })}
            name={`quizes.${quizIndex}.flashCard.question`}
            placeholder="Front Side"
          />
          <Input
            {...register(`quizes.${quizIndex}.flashCard.answer` as const, {
              required: true,
            })}
            name={`quizes.${quizIndex}.flashCard.answer`}
            placeholder="Back Side"
          />
        </Form.Group>
      </div>

      <div
        className={`${styles["question-type-card"]} d-flex align-items-end justify-content-end`}
      >
        <QuestionTypeCard isSmall type="flashcard" />
      </div>
    </div>
  );
};

export default FlashCard;
