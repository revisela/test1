"use client";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "@revisela/store";
import { quizActions, selectIsSaved } from "@revisela/store/slices/quizSlice";
import Wrapper from "@revisela/components/lib/Wrapper";
import Input from "@revisela/components/lib/Input";
import CloseIcon from "@revisela/assets/icons/CloseIcon";

import styles from "./index.module.css";

type Props = {
  register: UseFormRegister<any>;
};

const QuizHeader = ({ register }: Props) => {
  const isQuizSaved = useSelector(selectIsSaved);
  const dispatch = useDispatch();

  const handleResetQuiz = () => {
    dispatch(quizActions.reset());
    if (typeof window !== "undefined") {
      window.localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div>
      {isQuizSaved && (
        <div className="d-flex justify-content-end">
          <Button
            variant="dark"
            size="sm"
            className="mb-2 d-flex align-items-center"
            onClick={handleResetQuiz}
          >
            Reset Quiz <CloseIcon color="#fff" />
          </Button>
        </div>
      )}

      <div className={styles.container}>
        <Wrapper className="w-100" primary>
          <Form.Group>
            <Input
              {...register("title", { required: true })}
              className="mb-2"
              name="title"
              placeholder="Title"
            />
            <Input
              {...register("description", { required: true })}
              name="description"
              placeholder="Description (Optional)"
            />
          </Form.Group>
        </Wrapper>
      </div>
    </div>
  );
};

export default QuizHeader;
