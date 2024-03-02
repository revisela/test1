import * as Yup from "yup";
import { FillInObject } from "@revisela/app/_components/AnswerCards/FillInCardAnswer";
import { QuestionTypes } from "@revisela/app/_components/QuizSelect";
import { IQuizEntity } from "@revisela/store/slices/quizSlice.interface";

type AlphabetObjectType = {
  [key: number]: string;
};

const alphabetObject: AlphabetObjectType = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
};

export const getAlphabetForIndex = (index: number): string => {
  return alphabetObject[index].toUpperCase();
};

export function filterQuizzes(quizArray: any[]) {
  return quizArray
    .filter((quiz) => {
      return (
        (quiz?.fillIn && Object.values(quiz?.fillIn).length !== 0) ||
        (quiz.mcq && quiz.mcq.question) ||
        (quiz.flashCard && quiz.flashCard.question)
      );
    })
    .map((quiz) => {
      const filteredQuiz: any = {};
      if (quiz?.fillIn && Object.keys(quiz.fillIn).length !== 0) {
        filteredQuiz.fillIn = quiz.fillIn;
      }
      if (quiz.mcq && quiz.mcq.question) {
        filteredQuiz.mcq = {
          question: quiz.mcq.question,
          isSelectedOptionCorrect: quiz?.mcq?.isSelectedOptionCorrect,
          selectedOption: quiz?.mcq?.selectedOption,
        };
        if (quiz.mcq.options) {
          filteredQuiz.mcq.options = quiz.mcq.options.filter(
            (option: any) => option.option
          );
        }
      }
      if (quiz.flashCard && quiz.flashCard.question) {
        filteredQuiz.flashCard = {
          question: quiz.flashCard.question,
          answer: quiz.flashCard.answer,
          userAnswer: quiz.flashCard.userAnswer ?? "not-attempted",
        };
      }
      filteredQuiz.id = quiz.id;
      return filteredQuiz;
    });
}

export const getQuizType = (quiz: IQuizEntity): QuestionTypes => {
  type objectKeyType = "fillIn" | "mcq" | "flashCard";

  const quizType = Object.keys(quiz).filter(
    (key) => key !== "id"
  )[0] as objectKeyType;

  const quizTypes = {
    fillIn: "fill-in",
    mcq: "mcq",
    flashCard: "flashcard",
  } as { [key: string]: QuestionTypes };

  return quizTypes[quizType];
};

//* Will Filter the text according to the requirement
export const filterFillinText = (text: string) => {
  const regex = /\?\?(.*?)\?\?/g;
  const matches = text.matchAll(regex);
  const blanksArray: FillInObject[] = [];

  let id = 1;

  for (const match of matches) {
    const blank = match[1];

    blanksArray.push({ id, blank: blank.trim() });
    id++;
  }
  return blanksArray;
};

export function percentage(partialValue: number, totalValue: number): number {
  return (100 * partialValue) / totalValue;
}

//* Validation Schema for fillin question input
export const fillInStringValidationSchema = Yup.string().test(
  "advanced-validation",
  "Invalid question: it should contain one instance of double question marks with any text in between",
  (value) => {
    if (!value) {
      return true;
    }
    // Criteria 1: Check if the text contains one instance of double question marks with any text in between
    const regex = /\?\?.+?\?\?/; // Using .+? to match any text (non-greedy)
    const matchCount = (value.match(regex) || []).length;

    if (matchCount !== 1) {
      return false;
    }

    // Criteria 2: Check if there's only one occurrence of double question marks with any text in between
    const matches = value.match(regex);
    if (!matches) return false;

    const indexOfFirstMatch = value.indexOf(matches[0]);
    const indexOfSecondMatch = value.indexOf(matches[0], indexOfFirstMatch + 1);

    if (indexOfSecondMatch !== -1) {
      return false;
    }

    // Criteria 3: Check if the string is not empty
    return value.trim() !== "";
  }
);
