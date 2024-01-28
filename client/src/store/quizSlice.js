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
        getQuizStats: (state, action) => {
            state.quizStats = action.payload;
        },
        removeStats: (state, action) => {
            state.quizStats = null;
        },
        getTrendingQizzes: (state, action) => {
            state.trendingQuizzes = action.payload;
        },
        removeTrendingQuizzes: (state, action) => {
            state.trendingQuizzes = null;
        },
        getCreatedQuizzes: (state, action) => {
            state.createdQuizzes = action.payload;
        },
        removeCreatedQuizzes: (state, action) => {
            state.createdQuizzes = null;
        },
    },
});

export const {
    getQuizStats,
    getTrendingQizzes,
    getCreatedQuizzes,
    removeStats,
    removeTrendingQuizzes,
    removeCreatedQuizzes,
} = quizSlice.actions;

export default quizSlice.reducer;
