import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./dashboard.module.css";
import StatCard from "../../components/StatCard/StatCard";
import TrendingQuizCard from "../../components/TrendingQuizCard/TrendingQuizCard";

function Dashboard() {
    const quizStats = useSelector((state) => state.quizzes.quizStats);
    const trendingQuizzes = useSelector(
        (state) => state.quizzes.trendingQuizzes
    );

    return (
        <div className={styles.dashboard}>
            <div className={styles.statsCardsContainer}>
                <StatCard
                    color={"#FF5D01"}
                    data={quizStats?.totalQuizzes}
                    message={"Quiz Created"}
                />
                <StatCard
                    color={"#60B84B"}
                    data={quizStats?.numberOfQuestions}
                    message={"Questions Created"}
                />
                <StatCard
                    color={"#5076FF"}
                    data={quizStats?.totalImpressions}
                    message={"Total Impressions"}
                />
            </div>
            <div className={styles.trendingQuizsContainer}>
                <p className={styles.trendingQuizsHeading}>Trending Quizs</p>
                <div className={styles.trendingQuizsLayout}>
                    {trendingQuizzes?.map((quiz, index) => (
                        <TrendingQuizCard
                            key={index}
                            name={quiz.quizName}
                            impressions={quiz.impressions}
                            created={quiz.createdAt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
