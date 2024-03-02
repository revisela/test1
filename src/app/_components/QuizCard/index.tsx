"use client";
import React, { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import Wrapper from "@revisela/components/lib/Wrapper";
import CloseIcon from "@revisela/assets/icons/CloseIcon";
import QuizSelect, { QuestionTypes } from "../QuizSelect";
import Mcq from "../QuestionCards/Mcq";
import FlashCard from "../QuestionCards/FlashCard";
import FillIn from "../QuestionCards/FillIn";
import { IQuizEntity } from "@revisela/store/slices/quizSlice.interface";
import { getQuizType } from "@revisela/utils";
import styles from "./index.module.css";
interface QuizCardProps {
  quizNum: number;
  quizId: string;
  register: UseFormRegister<any>;
  errors: any;
  setValue: UseFormSetValue<any>;
  append: ({}: any) => void;
  insert: (index: number, value: any) => void;
  remove: (index: number) => void;
  quizIndex: number;
  control: any;
  quiz?: any | IQuizEntity;
}

const QuizCard = (props: QuizCardProps) => {
  const {
    quizId,
    quizNum,
    quizIndex,
    errors,
    register,
    insert,
    remove,
    control,
    quiz,
  } = props;

  const previousQuizType = getQuizType(quiz);

  const [selectedQuizType, setSelectedQuizType] =
    useState<Partial<QuestionTypes>>(previousQuizType);

  const handleAddQuiz = () => {
    insert(quizIndex + 1, { id: quizId });
  };

  const handleDeleteQuizCard = (id: number) => {
    remove(id);
  };

  const renderQuizSetup = () => {
    const quizTypes = {
      mcq: <Mcq quizIndex={quizIndex} register={register} control={control} />,
      flashcard: <FlashCard quizIndex={quizIndex} register={register} />,
      "fill-in": (
        <FillIn errors={errors} quizIndex={quizIndex} register={register} />
      ),
    };

    return <>{quizTypes[selectedQuizType as QuestionTypes]}</>;
  };

  return (
    <Wrapper className={`${styles["quiz-container"]}`} primary>
      <div
        style={
          selectedQuizType?.length > 0
            ? { marginBottom: "0px !important" }
            : undefined
        }
        className={styles.container}
      >
        {quizNum > 0 && (
          <div className="d-flex align-items-center justify-content-end position-relative">
            <span
              onClick={() => handleDeleteQuizCard(quizIndex)}
              className={styles["delete-btn"]}
            >
              <CloseIcon />
            </span>
          </div>
        )}  
        <span className={styles["number-count"]}>{quizNum}.</span>
        {selectedQuizType?.length > 0 ? (
          <>{renderQuizSetup()}</>
        ) : (
          <QuizSelect onSelectQuestion={(type) => setSelectedQuizType(type)} />
        )}

        <div className="d-flex align-items-center justify-content-center position-relative">
          <span onClick={handleAddQuiz} className={styles["add-button"]}>
            <FaPlus size={32} />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default QuizCard;
