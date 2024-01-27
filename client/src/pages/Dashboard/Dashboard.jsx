import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import StatCard from "../../components/StatCard/StatCard";
import TrendingQuizCard from "../../components/TrendingQuizCard/TrendingQuizCard";
import { getQuizStats } from "../../utils/ApiUtils";
import { useSelector } from "react-redux";

function Dashboard() {
    useEffect(() => {
        getQuizStats();
    }, []);

    return (
        <div className={styles.dashboard}>
            <div className={styles.statsCardsContainer}>
                <StatCard />
                <StatCard />
                <StatCard />
            </div>
            <div className={styles.trendingQuizsContainer}>
                <p className={styles.trendingQuizsHeading}>Trending Quizs</p>
                <div className={styles.trendingQuizsLayout}>
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                    <TrendingQuizCard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
