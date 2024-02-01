import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home/Home";
import QnACompletion from "./pages/QnACompletion/QnACompletion";
import PollCompletion from "./pages/PollCompletion/PollCompletion";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage/AuthPage";
import Quiz from "./pages/Quiz/Quiz";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import QuizCreator from "./pages/QuizCreator";
import { Navigate, Outlet, redirect } from "react-router-dom";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import QuizLayout from "./pages/QuizLayout/QuizLayout";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import Analysis from "./pages/Analysis/Analysis";
import QuestionAnalysis from "./pages/QuestionAnalysis/QuestionAnalysis";
import { login } from "./store/authSlice";
import {
    getUserCreatedQuizzes,
    getUserQuizStats,
    getUserTrendingQuizzes,
} from "./utils/ApiUtils";
import {
    getCreatedQuizzes,
    getQuizStats,
    getTrendingQizzes,
} from "./store/quizSlice";

function App() {
    const isUserLoggedIn =
        useSelector((state) => state.auth.status) ||
        localStorage.getItem("isLoggedIn");

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/auth"
                    element={<AuthPage />}
                    errorElement={<NotFound />}
                ></Route>
                <Route
                    path="/"
                    // element={<Home />}
                    element={isUserLoggedIn ? <Home /> : <Navigate to="auth" />}
                    errorElement={<NotFound />}
                >
                    <Route
                        path="/"
                        element={<Dashboard />}
                        errorElement={<NotFound />}
                    ></Route>
                    <Route
                        path="/analysis"
                        element={<Analysis />}
                        errorElement={<NotFound />}
                    ></Route>
                    <Route
                        path="/question-analysis/:questionId"
                        element={<QuestionAnalysis />}
                        errorElement={<NotFound />}
                    ></Route>
                </Route>
                <Route
                    path="/quiz/:quizId"
                    element={<QuizLayout />}
                    errorElement={<NotFound />}
                ></Route>
                <Route
                    path="/broken"
                    element={<NotFound />}
                    errorElement={<NotFound />}
                ></Route>
                {/* <Route
                loader={githubInfoLoader}
                path="github"
                element={<Github />}
            /> */}
            </>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
