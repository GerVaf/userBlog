import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import blogSlice from "./Slice/blogSlice";

const persistConfig = {
  key: "root", 
  version: 1, 
  storage, 
};

const reducers = combineReducers({
  blog: blogSlice, 
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export default store;
