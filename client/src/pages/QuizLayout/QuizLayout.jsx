import React, { useEffect, useState } from "react";
import styles from "./quizlayout.module.css";
import Quiz from "../Quiz/Quiz";
import QnACompletion from "../QnACompletion/QnACompletion";
import PollCompletion from "../PollCompletion/PollCompletion";
import { getQuiz } from "../../utils/ApiUtils";
import axios from "axios";
import conf from "../../config/config";
import { useNavigate } from "react-router-dom";

function QuizLayout() {
    const [quiz, setQuiz] = useState();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuizData = async () => {
            const url = new URL(window.location.href);
            const quizId = url.pathname.split("/")[2];
            const quizData = await getQuiz(quizId);
            if (!quizData?.data) {
                navigate("/broken", { state: quizData });
            }
            await axios.patch(`${conf.baseUrl}/quiz/update-quiz-impression`, {
                quizId: quizId,
            });
            setQuiz(quizData.data);
        };

        fetchQuizData();
    }, []);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    return quiz ? (
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
                    setCorrectAnswers={setCorrectAnswers}
                    quizType={quiz.quizType}
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
    ) : (
        <div className={styles.container}>
            <div className={styles.loader}></div>
        </div>
    );
}

export default QuizLayout;
