import React, { useEffect, useState } from "react";
import styles from "./quizlayout.module.css";
import Quiz from "../Quiz/Quiz";
import QnACompletion from "../QnACompletion/QnACompletion";
import PollCompletion from "../PollCompletion/PollCompletion";
import { getQuiz } from "../../utils/ApiUtils";

function QuizLayout() {
    const [quiz, setQuiz] = useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        const fetchQuizData = async () => {
            const url = new URL(window.location.href);
            const quizId = url.pathname.split("/")[2];
            const quizData = await getQuiz(quizId);
            setQuiz(quizData.data);
        };

        fetchQuizData();
    }, []);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        console.log(currentQuestionIndex);
    };

    return (
        <div className={styles.container}>
            {currentQuestionIndex < quiz?.questions.length ? (
                <Quiz
                    questionNumber={currentQuestionIndex}
                    totalQuestions={quiz?.questions.length}
                    question={quiz.questions[currentQuestionIndex]}
                    timer={quiz?.timer}
                    optionsType={quiz.optionsType}
                    onNextQuestion={handleNextQuestion}
                    currentQuestionIndex={currentQuestionIndex}
                />
            ) : quiz?.quizType === "qna" ? (
                <QnACompletion
                    correctAnswers={correctAnswers}
                    totalQuestions={quiz?.questions.length}
                />
            ) : (
                <PollCompletion />
            )}
        </div>
    );
}

export default QuizLayout;
