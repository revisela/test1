"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FilpCard from "../FlipCard";
import { useDispatch, useSelector } from "@revisela/store";
import {
  quizActions,
  selectIsResultActive,
} from "@revisela/store/slices/quizSlice";
import { FlashUserAnswerType } from "@revisela/store/slices/quizSlice.interface";

import styles from "./index.module.css";

interface FlashCardProps {
  question: string;
  answer: string;
  id: string;
  userAnswer: FlashUserAnswerType;
}

const FlashCardAnswer = ({
  question,
  answer,
  id,
  userAnswer,
}: FlashCardProps) => {
  const [isShowAnswer, setShowAnswer] = useState<boolean>(false);
  const [quizAnswer, setQuizAnswer] = useState<string>();
  const isResultActive = useSelector(selectIsResultActive);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isResultActive) {
      setShowAnswer(false);
      dispatch(quizActions.updateFlashCardAnswer({ id, userAnswer: 'not-attempted' }));
      setQuizAnswer('')

    }
  }, [isResultActive]);

  const handleMarkAnswer = (answer: FlashUserAnswerType) => {
    if (!isResultActive) {
      setQuizAnswer(answer);
      dispatch(quizActions.updateFlashCardAnswer({ id, userAnswer: answer }));
    }
  };

  return (
    <div className={styles["flashcard-container"]}>
      <FilpCard
        onClick={() => {
          isShowAnswer && setShowAnswer(!isShowAnswer)
        }}
        showAnswer={isShowAnswer}
        frontBody={
          <div
            className={`${styles.front} ${
              !isShowAnswer ? styles.active : undefined
            }`}
          >
            <div className="d-flex align-items-center justify-content-center">
              <h4 className={`${styles["flashcard-question"]} mb-5`}>
                {question}
              </h4>
            </div>

            <div className="pb-2 d-flex align-items-center justify-content-center w-100">
              <Button
                onClick={() => setShowAnswer(true)}
                size="sm"
                variant="success"
              >
                Reveal Answer
              </Button>
            </div>
          </div>
        }
        backBody={
          <div
            className={`${styles.back} ${
              isShowAnswer ? styles.active : undefined
            }`}
          >
            <div className="d-flex align-items-center justify-content-center">
              <h4 className={`${styles["flashcard-answer"]} mb-5`}>{answer}</h4>
            </div>

            <div className={`${styles["flashcard-select-answer"]}`}>
              <button
                type="button"
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  handleMarkAnswer("correct");
                }}
                className={` ${styles.correct} ${
                  userAnswer === "correct" ? styles.active : styles.disabled
                }`}
              >
                Mark as Correct
              </button>
              <button
                type="button"
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  handleMarkAnswer("incorrect");
                }}
                className={`${styles.wrong} ${
                  userAnswer === "incorrect" ? styles.active : styles.disabled
                } `}
              >
                Mark as Wrong
              </button>
            </div>
          </div>
        }
      />

      <input value={quizAnswer} type="text" required className="d-none" />
    </div>
  );
};

export default FlashCardAnswer;
