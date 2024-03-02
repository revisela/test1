import React from "react";
import Breadcrumb from "@revisela/components/Breadcrumb";
import QuizAnswerCard from "@revisela/app/_components/QuizAnswerCard";

import styles from "./index.module.css";

type Props = {};

const TakeQuiz = (props: Props) => {
  return (
    <div className={`${styles.container}`}>
      <Breadcrumb />
      <QuizAnswerCard />
    </div>
  );
};

export default TakeQuiz;
