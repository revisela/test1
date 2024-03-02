"use client";
import React, { FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Wrapper from "@revisela/components/lib/Wrapper";
import Modal from "@revisela/components/lib/Modal";
import CorrectAnswerIcon from "@revisela/assets/icons/CorrectAnswerIcon";
import WrongIcon from "@revisela/assets/icons/WrongIcon";

import { useDispatch, useSelector } from "@revisela/store";
import {
  quizActions,
  selectIsResultActive,
  selectIsResultModalOpen,
  selectIsShowCorrectAnswers,
  selectQuizTitleDescription,
  selectQuizes,
  selectResult,
} from "@revisela/store/slices/quizSlice";

//Answer Card Components
import FlashCardAnswer from "../AnswerCards/FlashCardAnswer";
import McqCardAnswer from "../AnswerCards/McqCardAnswer";
import FillInCardAnswer from "../AnswerCards/FillInCardAnswer";
import QuizResult from "@revisela/components/QuizResult";

import { getQuizType } from "@revisela/utils";

import styles from "./index.module.css";

type Props = {};

const QuizAnswerCard = (props: Props) => {
  const isShowCorrectAnswers = useSelector(selectIsShowCorrectAnswers);
  const isResultActive = useSelector(selectIsResultActive);
  const isResultModalOpen = useSelector(selectIsResultModalOpen);
  const quizInfo = useSelector(selectQuizTitleDescription);
  const quizDetails = useSelector(selectQuizes);
  const quizResult = useSelector(selectResult);

  const dispatch = useDispatch();

  const handleGetResult = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(quizActions.getResult());
  };

  const handleShowAnswers = () => {
    dispatch(quizActions.closeResultModal());
    dispatch(quizActions.showCorrectAnswers());
  };

  const quizData = quizDetails;

  const renderQuiz = quizData?.map((item, i) => {
    const quizType = getQuizType(item);
    const answerCards = {
      flashcard: (
        <FlashCardAnswer
          key={item?.flashCard?.question + item?.id}
          id={item?.id}
          question={item?.flashCard?.question}
          answer={item?.flashCard?.answer}
          userAnswer={item?.flashCard?.userAnswer}
        />
      ),
      mcq: (
        <McqCardAnswer
          selectedOption={item?.mcq?.selectedOption}
          id={item?.id}
          mcq={item?.mcq}
          isShowCorrectAnswers={isShowCorrectAnswers}
        />
      ),
      "fill-in": (
        <FillInCardAnswer
          isShowCorrectAnswers={isShowCorrectAnswers}
          id={item.id}
          fillIn={item?.fillIn}
        />
      ),
    };

    return (
      <div key={item?.flashCard?.question + item?.id} className={`${styles["quiz-answer-container"]} mb-4`}>
        <div className="d-flex align-items-center justify-content-between">
          <span className={styles["number-count"]}>{i + 1}.</span>
          {isResultActive && (
            <>
              {" "}
              {quizType === "flashcard" && (
                <AnswerFeedback
                  isWrong
                  isCorrect={item?.flashCard?.userAnswer === "correct"}
                />
              )}
              {quizType === "mcq" && (
                <AnswerFeedback
                  isWrong
                  isCorrect={item?.mcq?.isSelectedOptionCorrect}
                />
              )}
              {quizType === "fill-in" && (
                <AnswerFeedback
                  isWrong
                  isCorrect={item?.fillIn?.isUserAnswerCorrect}
                />
              )}
            </>
          )}
        </div>
        {answerCards[quizType]}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleGetResult}>
        <Wrapper className="mt-5" primary>
          <div>
            <div className="mb-4">
              <h2 className="mb-2">{quizInfo?.title}</h2>
              {quizInfo?.description && <p>{quizInfo?.description}</p>}
            </div>
            {renderQuiz}
          </div>
        </Wrapper>
        {!isResultActive && (
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Button
              type="submit"
              // onClick={handleGetResult}
              className={styles["create-btn"]}
            >
              Submit Test
            </Button>
          </div>
        )}
      </form>

      <Modal
        show={isResultModalOpen}
        handleClose={() => dispatch(quizActions.closeResultModal())}
      >
        <QuizResult
          totalQuestions={quizResult.totalQuestions}
          correctAnswers={quizResult.correctAnswers}
          wrongAnswers={quizResult.wrongAnswers}
          handleShowAnswers={handleShowAnswers}
        />
      </Modal>
    </div>
  );
};

export default QuizAnswerCard;

interface AnswerFeedbackProps {
  isCorrect: boolean;
  isWrong: boolean;
}
const AnswerFeedback = ({ isCorrect, isWrong }: AnswerFeedbackProps) => {
  return (
    <>
      {isCorrect ? (
        <span>
          <CorrectAnswerIcon />
        </span>
      ) : (
        <span>
          <WrongIcon />
        </span>
      )}
    </>
  );
};
