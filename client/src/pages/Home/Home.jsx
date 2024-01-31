import React, { useEffect, useMemo, useState } from "react";
import styles from "./home.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Analysis from "../Analysis/Analysis";
import QuestionAnalysis from "../QuestionAnalysis/QuestionAnalysis";
import CreateQuizModal from "../../components/CreateQuizModal/CreateQuizModal";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Outlet,
    useNavigate,
} from "react-router-dom";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import {
    getUserCreatedQuizzes,
    getUserQuizStats,
    getUserTrendingQuizzes,
} from "../../utils/ApiUtils";
import {
    getCreatedQuizzes,
    getQuizStats,
    getTrendingQizzes,
} from "../../store/quizSlice";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import EditQuizModal from "../../components/EditQuizModal/EditQuizModal";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchQuizData = async () => {
            const statJson = await getUserQuizStats();
            const trendingJson = await getUserTrendingQuizzes();
            const createdJson = await getUserCreatedQuizzes();

            dispatch(getQuizStats(statJson.data));
            dispatch(getTrendingQizzes(trendingJson.data));
            dispatch(getCreatedQuizzes(createdJson.data));
        };

        const userData = JSON.parse(localStorage.getItem("userData"));
        dispatch(login({ ...userData }));

        fetchQuizData();
    }, []);

    const [isCreateQuizModalActive, setIsCreateQuizModalActive] =
        useState(false);
    const [isEditQuizModalActive, setIsEditQuizModalActive] =
        useState(false);
    const [isDeleteQuizModalActive, setDeleteQuizModalActive] = useState(false);

    return (
        <div className={styles.home}>
            <Sidebar setIsCreateQuizModalActive={setIsCreateQuizModalActive} />
            <Outlet
                context={[
                    isDeleteQuizModalActive,
                    setDeleteQuizModalActive,
                    isCreateQuizModalActive,
                    setIsCreateQuizModalActive,
                    isEditQuizModalActive,
                    setIsEditQuizModalActive
                ]}
            />
            {isCreateQuizModalActive && (
                <CreateQuizModal
                    setIsCreateQuizModalActive={setIsCreateQuizModalActive}
                />
            )}
            {isEditQuizModalActive && (
                <EditQuizModal
                    setIsEditQuizModalActive={setIsEditQuizModalActive}
                />
            )}
            {isDeleteQuizModalActive && (
                <DeleteModal
                    setDeleteQuizModalActive={setDeleteQuizModalActive}
                />
            )}
        </div>
    );
}

export default Home;
