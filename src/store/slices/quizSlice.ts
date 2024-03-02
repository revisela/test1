import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FlashUserAnswerType,
  IQuizEntity,
  QuizState,
} from "./quizSlice.interface";
import { filterQuizzes, getQuizType } from "@revisela/utils";

let QUIZ_KEY = "quiz";
export const initialState: QuizState = {
  title: "",
  description: "",
  quizes: [],
  isSaved: false,
  result: {
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  },
  isResultActive: false,
  isResultModalOpen: false,
  isShowCorrectAnswers: false,
};

const quizSlice = createSlice({
  initialState,
  name: QUIZ_KEY,
  reducers: {
    addQuiz: (state, action: PayloadAction<QuizState>) => {
      const { title, description, quizes } = action.payload;

      state.title = title;
      state.description = description;
      state.quizes = quizes;
      state.isSaved = true;
    },

    updateFlashCardAnswer: (
      state,
      action: PayloadAction<{
        id: number | string;
        userAnswer: FlashUserAnswerType;
      }>
    ) => {
      const filteredQuiz = filterQuizzes([...state.quizes]);
      const updatedQuiz = filteredQuiz.map((item: IQuizEntity) => {
        const quizType = getQuizType(item);
        if (item.id === action.payload.id) {
          if (quizType === "flashcard" && item.flashCard) {
            return {
              ...item,
              flashCard: {
                ...item.flashCard,
                userAnswer: action.payload.userAnswer,
              },
            };
          }
        }
        return item;
      });

      state.quizes = updatedQuiz;
    },

    updateMcqCardAnswer: (
      state,
      action: PayloadAction<{
        id: number | string;
        isSelectedOptionCorrect: boolean;
        selectedOptionId: string;
      }>
    ) => {
      const filteredQuiz = filterQuizzes([...state.quizes]);
      const updatedQuiz = filteredQuiz.map((item: IQuizEntity) => {
        const quizType = getQuizType(item);

        if (item.id === action.payload.id) {
          if (quizType === "mcq" && item.mcq) {
            return {
              ...item,
              mcq: {
                ...item.mcq,
                options: [...item.mcq.options],
                isSelectedOptionCorrect: action.payload.isSelectedOptionCorrect,
                selectedOption: action.payload.selectedOptionId,
              },
            };
          }
        }
        return item;
      });

      state.quizes;

      state.quizes = updatedQuiz;
    },

    updateFillInCardAnswer: (
      state,
      action: PayloadAction<{
        id: string | number;
        userAnswer: string;
        isUserAnswerCorrect: boolean;
      }>
    ) => {
      const filteredQuiz = filterQuizzes([...state.quizes]);
      const updatedQuiz = filteredQuiz.map((item: IQuizEntity) => {
        const quizType = getQuizType(item);
        if (item.id === action.payload.id) {
          if (quizType === "fill-in" && item.fillIn) {
            return {
              ...item,
              fillIn: {
                ...item.fillIn,
                userAnswer: action.payload.userAnswer,
                isUserAnswerCorrect: action.payload.isUserAnswerCorrect,
              },
            };
          }
        }
        return item;
      });

      state.quizes = updatedQuiz;
    },

    getResult: (state) => {
      let totalQuestions: number = state.quizes?.length || 0;
      let correctAnswers: number = 0;
      let wrongAnswers: number = 0;

      state.quizes?.map((item) => {
        const quizType = getQuizType(item);

        if (quizType === "fill-in" && item.fillIn) {
          if (item?.fillIn?.isUserAnswerCorrect) {
            correctAnswers++;
          } else {
            wrongAnswers++;
          }
        }

        if (quizType === "flashcard" && item.flashCard) {
          if (item?.flashCard.userAnswer === "correct") {
            correctAnswers++;
          } else {
            wrongAnswers++;
          }
        }

        if (quizType === "mcq" && item.mcq) {
          if (item?.mcq.isSelectedOptionCorrect) {
            correctAnswers++;
          } else {
            wrongAnswers++;
          }
        }
      });

      state.result = {
        totalQuestions,
        correctAnswers,
        wrongAnswers,
      };
      state.isResultActive = true;
      state.isResultModalOpen = true;
    },

    closeResultModal: (state) => {
      state.isResultModalOpen = false;
    },
    openResultModal: (state) => {
      state.isResultModalOpen = true;
    },
    showCorrectAnswers: (state) => {
      state.isShowCorrectAnswers = true;
    },

    resetResultState: (state) => {
      state.isResultActive = false;
      state.isResultModalOpen = false;
      state.isShowCorrectAnswers = false;
    },

    reset: (state) => {
      state.title = "";
      state.description = "";
      state.quizes = [];
      state.result = { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0 };
      state.isSaved = false;
      state.isResultActive = false;
      state.isResultModalOpen = false;
    },
  },
});

export const quizActions = quizSlice.actions;
export default quizSlice;

//* Getting Quiz State
const getQuizState = (rootState: any): QuizState => rootState[QUIZ_KEY];

//* Selectors
export const selectQuizes = createSelector(getQuizState, (state) =>
  filterQuizzes(state.quizes)
);
export const selectQuizTitleDescription = createSelector(
  getQuizState,
  (state) => ({
    title: state.title,
    description: state.description,
  })
);

export const selectIsSaved = createSelector(
  getQuizState,
  (state) => state.isSaved
);
export const selectResult = createSelector(
  getQuizState,
  (state) => state.result
);
export const selectIsResultActive = createSelector(
  getQuizState,
  (state) => state.isResultActive
);
export const selectIsResultModalOpen = createSelector(
  getQuizState,
  (state) => state.isResultModalOpen
);
export const selectIsShowCorrectAnswers = createSelector(
  getQuizState,
  (state) => state.isShowCorrectAnswers
);
