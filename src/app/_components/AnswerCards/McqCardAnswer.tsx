"use client";
import React, { ChangeEvent } from "react";
import { IMcqEntity } from "@revisela/store/slices/quizSlice.interface";
import { getAlphabetForIndex } from "@revisela/utils";
import { useDispatch, useSelector } from "@revisela/store";
import {
  quizActions,
  selectIsResultActive,
} from "@revisela/store/slices/quizSlice";

import styles from "./index.module.css";

interface McqCardAnswerProps {
  mcq: IMcqEntity;
  id: number | string;
  selectedOption?: string;
  isShowCorrectAnswers: boolean;
}

const McqCardAnswer = ({
  mcq,
  id,
  selectedOption,
  isShowCorrectAnswers,
}: McqCardAnswerProps) => {
  const isResultActive = useSelector(selectIsResultActive);

  const dispatch = useDispatch();

  const correctOption = mcq.options.find((item) => item.isCorrect);

  const handleSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    const payload = {
      id: id,
      isSelectedOptionCorrect: correctOption?.id.toString() === e.target.id,
      selectedOptionId: e.target.id,
    };

    if (!isResultActive) {
      if (e.target.id?.length > 0) {
        dispatch(quizActions.updateMcqCardAnswer(payload));
      }
    }
  };

  return (
    <div className={`${styles["mcq-container"]}`}>
      <h4 className="text-center">{mcq.question}</h4>
      {mcq?.options?.length &&
        mcq.options.map((item, i) => (
          <RadioOption
            key={item.id}
            option={item.option}
            index={i + 1}
            id={item.id}
            optionName={`${mcq?.question}-${id}`}
            onChange={handleSelectOption}
            defaultChecked={selectedOption === item.id.toString()}
          />
        ))}

      {isShowCorrectAnswers && (
        <div className="correct-answer-container">
          Correct Answer: {correctOption?.option}
        </div>
      )}
    </div>
  );
};

export default McqCardAnswer;

interface RadioOptionProps {
  option: string;
  index: number;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  optionName: string;
}
const RadioOption = ({
  option,
  index,
  onChange,
  id,
  optionName,
  defaultChecked,
}: RadioOptionProps) => {
  const isResultActive = useSelector(selectIsResultActive);

  return (
    <div
      className={`${styles["radio-container"]} d-flex align-items-center justify-content-start`}
    >
      {!isResultActive ? (
        <input
          onChange={onChange}
          key={isResultActive ? "active" : "not-active"}
          type="radio"
          name={optionName}
          id={`${id}`}
          className="me-2"
          required
        />
      ) : (
        <input
          type="radio"
          name={optionName}
          id={`${id}`}
          className="me-2"
          disabled
          defaultChecked={defaultChecked}
        />
      )}
      <label htmlFor={`${id}`}>
        {getAlphabetForIndex(index)}. {option}
      </label>
    </div>
  );
};
