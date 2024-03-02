"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { QuestionTypeCard } from "../QuizSelect";
import { Form } from "react-bootstrap";
import Input from "@revisela/components/lib/Input";
import { getAlphabetForIndex } from "@revisela/utils";
import CloseIcon from "@revisela/assets/icons/CloseIcon";
import { UseFormRegister, useFieldArray } from "react-hook-form";

type Option = {
  id: number;
  option: string;
  isCorrect?: boolean;
};
interface McqProps {
  register: UseFormRegister<any>;
  quizIndex: number;
  control: any;
}

const Mcq = ({ quizIndex, register, control }: McqProps) => {
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const { fields, append, remove, update, replace } = useFieldArray({
    control,
    name: `quizes.${quizIndex}.mcq.options`,
  });
  const [optionFields, setOptionFields] = useState<any[]>([]);

  useEffect(() => {
    if (fields.length === 0 && optionFields.length === 0) {
      setOptionFields([
        { id: (Date.now() - 10).toString(), option: "" },
        { id: (Date.now() - 20).toString(), option: "" },
      ]);
    }
  }, [fields, optionFields]);

  useEffect(() => {
    if (fields?.length > 0 && !optionFields?.length) {
      setOptionFields(fields);
      replace([]);
    } else {
      const storeLocalTimeout = setTimeout(() => {
        replace(optionFields);
      }, 500);

      return () => {
        clearTimeout(storeLocalTimeout);
      };
    }
  }, [optionFields]);

  const correctOption = optionFields?.find((item) => item?.isCorrect);

  const handleSetCorrectOption = ({
    id,
    index,
  }: {
    id: string;
    index: number;
  }) => {
    const updatedFields = optionFields?.map((option) => ({
      ...option,
      isCorrect: option?.id === id,
    }));
    setCorrectAnswer(id);
    setOptionFields(updatedFields);
    // replace(updatedFields); v
  };

  const handleAddOption = () => {
    const newOption = { id: Date.now(), option: "" };
    setOptionFields([...optionFields, newOption]);
    append({ id: Date.now() });
  };

  const handleOptionFieldChange = (id: string, option: string) => {
    // const foundField = fields?.find((item) => item?.id === id);

    const updatedFields = optionFields?.map((item) => {
      if (item?.id === id) {
        return {
          ...item,
          option,
        };
      }
      return item;
    });

    setOptionFields(updatedFields);
  };

  const handleDeleteOption = (id: string) => {
    const filteredOptions = optionFields?.filter((item) => item?.id !== id);
    setOptionFields(filteredOptions);
  };

  return (
    <div className="w-100">
      <div className={`${styles["input-container"]}`}>
        <Form.Group className="w-100 mb-4">
          <Input
            {...register(`quizes.${quizIndex}.mcq.question`, {
              required: true,
            })}
            name={`quizes.${quizIndex}.mcq.question`}
            placeholder="Enter Question"
            className="w-100"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4 d-flex align-items-start justify-content-start gap-2 flex-column">
          {optionFields.map((item, i) => (
            <div
              key={`${i}-`}
              className="d-flex align-items-center justify-content-flex-start"
            >
              <span className="me-2">{getAlphabetForIndex(i + 1)}.</span>
              <Input
                className="w-100"
                name={`option-${item.id}`}
                placeholder="Enter Option"
                value={item?.option}
                onChange={(e) =>
                  handleOptionFieldChange(item.id, e.target.value)
                }
                required
              />
              {optionFields.length > 2 && (
                <span
                  className="cursor-pointer"
                  onClick={() => handleDeleteOption(item.id)}
                >
                  <CloseIcon color="#000" />
                </span>
              )}
            </div>
          ))}

          {/* {fields.map((item, i) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-flex-start"
            >
              <span className="me-2">{getAlphabetForIndex(i + 1)}.</span>
              <Input
                {...register(`quizes.${quizIndex}.mcq.options.${i}.option`, {
                  required: true,
                })}
                className="w-100"
                name={`quizes.${quizIndex}.mcq.options.${i}.option`}
                placeholder="Enter Option"
                required
                onChange={(e) =>
                  handleOptionFieldChange(item.id, e.target.value)
                }
              />
              {fields.length > 2 && (
                <span className="cursor-pointer" onClick={() => remove(i)}>
                  <CloseIcon color="#000" />
                </span>
              )}
            </div>
          ))} */}
        </Form.Group>

        <span
          className={`${styles["add-option-button"]} mt-4 cursor-pointer`}
          onClick={handleAddOption}
        >
          Add Option +
        </span>
        <div className="d-flex align-items-center justify-content-start gap-2">
          <span
            className={`${styles["add-option-button"]} `}
            onClick={handleAddOption}
          >
            Select Correct Option:
          </span>
          <div className="d-flex align-items-center justify-content-start gap-1">
            {optionFields?.map((option: any, i) => (
              <span
                key={option.id}
                onClick={() =>
                  handleSetCorrectOption({ id: option?.id, index: i })
                }
                className={`${styles["option"]} ${
                  option?.isCorrect ? styles.selected : undefined
                } cursor-pointer`}
              >
                {getAlphabetForIndex(i + 1)}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${styles["question-type-card"]} d-flex align-items-end justify-content-end`}
      >
        <QuestionTypeCard isSmall type="mcq" />
      </div>

      {correctOption?.id?.length > 0 ? (
        <input value={correctOption?.id} type="text" className="d-none" required />
      ) : (
        <input value={correctAnswer} type="text" className="d-none" required />
      )}
    </div>
  );
};

export default Mcq;
