export type FlashUserAnswerType = "correct" | "incorrect" | "not-attempted";

export interface IFlashCardEntity {
  question: string;
  answer: string;
  id: number;
  userAnswer?: FlashUserAnswerType;
}

export interface IMcqEntity {
  question: string;
  options: Array<{
    id: string;
    option: string;
    isCorrect: boolean;
  }>;
  id: number;
  isSelectedOptionCorrect?: boolean;
  selectedOption?: string;
}

export interface IFillInEntity {
  text: string;
  userAnswer?: string;
  isUserAnswerCorrect?: boolean;
}
export interface IResultEntity {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
}

export interface IQuizEntity {
  type?: "flashcard" | "mcq" | "fill-in";
  id: number;
  flashCard?: IFlashCardEntity;
  mcq?: IMcqEntity;
  fillIn?: IFillInEntity;
}

export interface QuizState {
  title: string;
  description?: string;
  quizes: IQuizEntity[];
  result: IResultEntity;
  isSaved: boolean;
  isResultActive: boolean;
  isResultModalOpen: boolean;
  isShowCorrectAnswers: boolean;
}
