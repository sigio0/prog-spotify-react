import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../Reducers";

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});

export default store;
