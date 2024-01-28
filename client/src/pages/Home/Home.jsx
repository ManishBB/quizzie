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

function Home() {
    const [isCreateQuizModalActive, setIsCreateQuizModalActive] =
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
                ]}
            />
            {isCreateQuizModalActive && (
                <CreateQuizModal
                    setIsCreateQuizModalActive={setIsCreateQuizModalActive}
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
