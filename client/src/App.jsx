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
import { testRoute } from "./utils/ApiUtils";
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

function App() {
    const dispatch = useDispatch();

    let userData = null;

    useEffect(() => {
        userData = JSON.parse(localStorage.getItem("userData"));
        dispatch(login({ userData }));
        console.log(userData);
    }, []);

    console.log(localStorage.getItem("isLoggedIn"));

    const isUserLoggedIn =
        useSelector((state) => state.auth.status) ||
        localStorage.getItem("isLoggedIn");

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/auth" element={<AuthPage />}></Route>
                <Route
                    path="/"
                    // element={<Home />}
                    element={isUserLoggedIn ? <Home /> : <Navigate to="auth" />}
                >
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/analysis" element={<Analysis />}></Route>
                    <Route
                        path="/question-analysis/:questionId"
                        element={<QuestionAnalysis />}
                    ></Route>
                </Route>
                <Route path="/quiz/:quizId" element={<QuizLayout />}></Route>
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
