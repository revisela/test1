import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// slices
import quizSlice from "./slices/quizSlice";

export const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

// letting window initialize
export const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// localstorage persist configuration
export const rootPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  quiz: quizSlice.reducer,
});

export default rootReducer;
