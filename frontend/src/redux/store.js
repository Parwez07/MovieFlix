import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
