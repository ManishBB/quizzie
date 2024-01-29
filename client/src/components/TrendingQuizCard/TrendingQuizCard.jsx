import React from "react";
import styles from "./trendingquizcard.module.css";
import ViewsSVG from "../../assets/views.svg";

function TrendingQuizCard({ name, impressions, createdAt }) {
    console.log(createdAt);
    return (
        <div className={styles.trendingQuizCard}>
            <div className={styles.quizData}>
                <p className={styles.quizTitle}>
                    {name?.length > 8 ? name.slice(0, 8) + "..." : name}
                </p>
                <p className={styles.quizImpressions}>
                    {impressions}
                    <img
                        className={styles.viewsSvg}
                        src={ViewsSVG}
                        alt="Views SVG"
                    />
                </p>
            </div>
            <p className={styles.quizCreatedOn}>
                {new Date(createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
            </p>
        </div>
    );
}

export default TrendingQuizCard;
