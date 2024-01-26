import React from "react";
import styles from "./quizlayout.module.css";
import Quiz from "../Quiz/Quiz";

function QuizLayout() {
    return (
        <div className={styles.container}>
            <Quiz />
        </div>
    );
}

export default QuizLayout;
