import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import quizSlice from "./quizSlice";
import metadataSlice from "./metadataSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        quizzes: quizSlice,
        metadata: metadataSlice,
    },
});

export default store;
