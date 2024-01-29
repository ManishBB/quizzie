import React from "react";
import styles from "./qnacompletion.module.css";
import trophyImage from "../../assets/trophy.png";

function QnACompletion({ correctAnswers, totalQuestions }) {
    return (
        <div className={styles.container}>
            <div className={styles.scoreContainer}>
                <p className={styles.completionMessage}>
                    Congrats Quiz is completed
                </p>
                <img
                    className={styles.quizTrophy}
                    src={trophyImage}
                    alt="Trophy"
                />
                <p className={styles.completionMessage}>
                    Your Score is{" "}
                    <span className={styles.quizScore}>
                        0{correctAnswers}/0{totalQuestions}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default QnACompletion;
