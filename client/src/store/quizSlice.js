import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizStats: null,
    trendingQuizzes: null,
    createdQuizzes: null,
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        getStats: (state, action) => {
            state.quizStats = action.payload;
        },
        getTrendingQizzes: (state, action) => {
            state.trendingQuizzes = action.payload;
        },
        getCreatedQuizzes: (state, action) => {
            state.createdQuizzes = action.payload;
        },
    },
});

export const { login, logout } = quizSlice.actions;

export default quizSlice.reducer;
