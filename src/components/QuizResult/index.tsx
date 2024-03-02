"use client";
import React, { useEffect, useState } from "react";
import Button from "../lib/Button";

import { percentage } from "@revisela/utils";

import styles from "./index.module.css";

const generateRandomNumber = (range: number) =>
  Math.floor(Math.random() * range);

interface QuizResultProps {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  handleShowAnswers?: () => void;
}

const QuizResult = ({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  handleShowAnswers,
}: QuizResultProps) => {
  const [aboveAverageQuote, setAboveAverageQuote] = useState<number>();
  const [belowAverageQuote, setBelowAverageQuote] = useState<number>();

  useEffect(() => {
    setAboveAverageQuote(generateRandomNumber(3));
    setBelowAverageQuote(generateRandomNumber(5));
  }, []);

  return (
    <div
      className={`${styles.container} d-flex align-items-center justify-content-center flex-column`}
    >
      <h2 className="text-center fw-bold">
        Your final percentage is <br /> 🥁 (Drumroll) 🥁
      </h2>
      <div className={`${styles.percentage} rounded-circle`}>
        <h2 className="fw-bold text-center">
          {percentage(correctAnswers, totalQuestions).toFixed()}%
        </h2>
      </div>
      <p className="fw-bold text-center">
        {+percentage(correctAnswers, totalQuestions).toFixed() >= 50 &&
        aboveAverageQuote
          ? [
              "Go..Little..Rockstar 🎸",
              "You must be a beauty with the brain 😉",
              "You deserve a cocktail 🍸..unless you are underage",
            ][aboveAverageQuote] //change the *<number> as per the number of options.
          : typeof belowAverageQuote === "number" &&
            [
              "🎵Oh No.. Oh No.. Oh No No No No N🎵",
              "It's okay, mistakes can happen 🤰🏻",
              "It's okay, you atleast got the looks..right?",
              "You did a fantastic job 🤥",
              "Prepare some ☕️, we got work to do!",
            ][belowAverageQuote]}
      </p>

      <div className={`${styles["quiz-description"]} w-100`}>
        <p className="p-0 m-0">Total Questions: {totalQuestions}</p>
        <p className="p-0 m-0">Correct answers: {correctAnswers}</p>
        <p>Wrong answers: {wrongAnswers}</p>
      </div>

      <Button
        onClick={() => {
          handleShowAnswers && handleShowAnswers();
        }}
        className="bg-blue"
      >
        View Answers
      </Button>
    </div>
  );
};

export default QuizResult;
