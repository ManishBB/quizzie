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

    const formatImpressions = (num) => {
        if (num < 1000) {
            return num.toString();
        } else if (num < 1000000) {
            return (num / 1000).toFixed(1) + "K";
        }
    };

    return quizStats ? (
        <div className={styles.dashboard}>
            <div className={styles.statsCardsContainer}>
                <StatCard
                    color={"#FF5D01"}
                    data={quizStats?.totalQuizzes}
                    message={"Quiz Created"}
                />
                <StatCard
                    color={"#60B84B"}
                    data={formatImpressions(quizStats?.numberOfQuestions)}
                    message={"Questions Created"}
                />
                <StatCard
                    color={"#5076FF"}
                    data={formatImpressions(quizStats?.totalImpressions)}
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
                            quiz={quiz}
                        />
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.dashboard}>
            <div className={StylePropertyMap.loaderContainer}>
                <div className={styles.loader}></div>
            </div>
        </div>
    );
}

export default Dashboard;
