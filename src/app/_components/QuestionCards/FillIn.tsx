"use client";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { QuestionTypeCard } from "../QuizSelect";
import Input from "@revisela/components/lib/Input";

import styles from "./index.module.css";

interface FillInProps {
  register: UseFormRegister<any>;
  quizIndex: number;
  errors: any;
}

const FillIn = ({ register, errors, quizIndex }: FillInProps) => {
  const questionError = errors?.quizes?.[quizIndex]?.fillIn?.text?.message;
  return (
    <div>
      <div className={`${styles["fillin-container"]} w-100`}>
        <Input
          {...register(`quizes.${quizIndex}.fillIn.text`)}
          name={`quizes.${quizIndex}.fillIn.text`}
          className="mb-1"
          placeholder="Type here"
          required
        />

        {questionError && (
          <p className={`${styles["error-text"]} text-danger`}>
            {questionError}
          </p>
        )}

        <p className={styles["info-text"]}>
          To create the blank, add 2 Question marks around the word without
          leaving any spaces. Eg: ??WORD?? <br />
          Note: You can only create one fill-in per question
        </p>
      </div>

      <div
        className={`${styles["question-type-card"]} d-flex align-items-end justify-content-end`}
      >
        <QuestionTypeCard isSmall type="fill-in" />
      </div>
    </div>
  );
};

export default FillIn;
