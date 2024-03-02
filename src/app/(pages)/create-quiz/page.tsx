"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import QuizHeader from "@revisela/app/_components/QuizHeader";
import QuizCard from "@revisela/app/_components/QuizCard";
import { useDispatch, useSelector } from "@revisela/store";
import {
  quizActions,
  selectIsSaved,
  selectQuizTitleDescription,
  selectQuizes,
} from "@revisela/store/slices/quizSlice";
import { fillInStringValidationSchema, filterQuizzes } from "@revisela/utils";

import styles from "./index.module.css";

type Props = {};

const CreateQuiz = (props: Props) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Quiz title is requried"),
    description: Yup.string().notRequired(),
    quizes: Yup.array().of(
      Yup.object({
        id: Yup.string().required(),
        type: Yup.string(),
        flashCard: Yup.object({
          question: Yup.string(),
          answer: Yup.string(),
        }).notRequired(),
        mcq: Yup.object({
          question: Yup.string(),
          options: Yup.array().of(
            Yup.object({
              option: Yup.string(),
              isCorrect: Yup.boolean(),
            })
          ),
        }).notRequired(),
        fillIn: Yup.object({
          text: fillInStringValidationSchema.notRequired(),
        }).notRequired(),
      })
    ),
  });

  const quizDetails = useSelector(selectQuizes);
  const quizInfo = useSelector(selectQuizTitleDescription);
  const isQuizSaved = useSelector(selectIsSaved);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      quizes: quizDetails?.length !== 0 ? quizDetails : [{ id: "1" }],
      title: quizInfo?.title ?? "",
      description: quizInfo?.description ?? "",
    },
  });

  const { fields, append, insert, remove } = useFieldArray({
    control,
    name: "quizes",
  });

  useEffect(() => {
    if (!isQuizSaved) {
      setValue("quizes", [{ id: `${Date.now()}` }]);
      setValue("title", "");
      setValue("description", "");
    }
  }, [isQuizSaved, setValue]);

  useEffect(() => {
    if (fields?.length === 0) {
      if (typeof window !== "undefined") {
        window.localStorage.clear();
        setValue("quizes", [{ id: `${Date.now()}` }]);
      }
    }
  }, [fields]);

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data: any) => {
    if (filterQuizzes(data?.quizes)?.length) {
      dispatch(quizActions.addQuiz(data));
      router.push("/take-quiz");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className="mb-5">
          <QuizHeader register={register} />
        </div>
        <div className="mb-5">
          {fields?.map((item, i) => (
            <React.Fragment key={item?.id}>
              <QuizCard
                register={register}
                errors={errors}
                setValue={setValue}
                append={append}
                insert={insert}
                remove={remove}
                control={control}
                quizId={item?.id}
                quizNum={i + 1}
                quizIndex={i}
                quiz={item}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Button type="submit" className={styles["create-btn"]}>
            Create My Test
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateQuiz;
