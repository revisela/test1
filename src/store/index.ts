import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer, { rootPersistConfig } from "./rootReducer";

// root reducer type after all combined reducers
export type RootState = ReturnType<typeof rootReducer>;

// Define the type for dispatching actions from the store
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
});

const persistor = persistStore(store);

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

// Create a custom useDispatch hook with typed dispatch
const useDispatch = () => useAppDispatch<AppDispatch>();

export { store, persistor, useSelector, useDispatch };
