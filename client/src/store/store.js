import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import quizSlice from "./quizSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        quizzes: quizSlice,
    },
});

export default store;
