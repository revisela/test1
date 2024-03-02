"use client";
import React, { Fragment, ChangeEvent, useState, useEffect } from "react";
import Input from "@revisela/components/lib/Input";
import { IFillInEntity } from "@revisela/store/slices/quizSlice.interface";

import { useDispatch, useSelector } from "@revisela/store";
import { filterFillinText } from "@revisela/utils";
import {
  quizActions,
  selectIsResultActive,
} from "@revisela/store/slices/quizSlice";

import styles from "./index.module.css";
export interface FillInObject {
  id: number;
  blank: string;
}
interface FillInCardAnswerProps {
  fillIn: IFillInEntity;
  id: number | string;
  isShowCorrectAnswers: boolean;
}

const FillInCardAnswer = ({
  id,
  fillIn,
  isShowCorrectAnswers,
}: FillInCardAnswerProps) => {
  const [answer, setAnswer] = useState<string>("");
  const isResultActive = useSelector(selectIsResultActive);

  const quizId = id;

  useEffect(() => {
    if (!isResultActive) {
      setAnswer("");
    }
  }, [isResultActive]);

  const dispatch = useDispatch();

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const userInput = e.target.value;
    setAnswer(userInput);

    const foundBlankOption = filteredTextArray?.find((item) => item.id === id);
    if (userInput) {
      if (userInput.length > 0) {
        dispatch(
          quizActions.updateFillInCardAnswer({
            id: quizId,
            userAnswer: userInput,
            isUserAnswerCorrect: foundBlankOption?.blank === userInput,
          })
        );
      }
    }
  };

  const text = fillIn.text;
  const filteredTextArray = filterFillinText(text);

  const replaceWithInputs = (text: string, data: FillInObject[]) => {
    return (
      <Fragment>
        {data.map(({ id, blank }) => (
          <Fragment key={id}>
            {text.includes(`??${blank}??`) ? (
              <div className="d-flex align-items-center justify-content-start flex-wrap">
                {text.split(`??${blank}??`)[0]}
                <Input
                  name="blank_answer"
                  className={`${styles["blank-input"]} mx-2`}
                  key={id}
                  id={`${id}`}
                  value={answer}
                  placeholder="write answer here"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleAnswerChange(e, id)
                  }
                  defaultValue={fillIn?.userAnswer}
                  required
                  disabled={isResultActive}
                />
                {text.split(`??${blank}??`)[1]}
              </div>
            ) : (
              text.trim()
            )}
          </Fragment>
        ))}
      </Fragment>
    );
  };

  return (
    <div className={`${styles["fillIn-container"]}`}>
      {replaceWithInputs(text, filteredTextArray)}
      {isShowCorrectAnswers && (
        <div className="correct-answer-container">
          Correct Answer: {filteredTextArray[0]?.blank}
        </div>
      )}
    </div>
  );
};

export default FillInCardAnswer;
