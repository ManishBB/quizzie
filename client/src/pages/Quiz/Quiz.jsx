import React, { useEffect, useState } from "react";
import styles from "./quiz.module.css";
import TextOptionCard from "../../components/TextOptionCard/TextOptionCard";
import ImageOptionCard from "../../components/ImageOptionCard/ImageOptionCard";
import TextImageOptionCard from "../../components/TextImageOptionCard/TextImageOptionCard";
import axios from "axios";
import conf from "../../config/config";

function Quiz({
    questionNumber,
    totalQuestions,
    question,
    timer,
    optionsType,
    onNextQuestion,
    currentQuestionIndex,
    setCorrectAnswers,
    quizType,
}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(timer);

    console.log(quizType);

    useEffect(() => {
        let countdown;
        if (!(quizType === "poll" || timer === 0)) {
            countdown = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);

            if (timeRemaining === 0) {
                clearInterval(countdown);
                onNextQuestion();
            }
        }

        return () =>
            clearInterval(!(quizType === "poll" || timer === 0) && countdown);
    }, [timeRemaining]);

    useEffect(() => {
        setTimeRemaining(timer);
        setSelectedOption(null);

        //getting question id to increment question impression count
        console.log(question._id);
    }, [currentQuestionIndex]);

    const handleOptionSelect = async (questionId, optionId, optionIndex) => {
        setSelectedOption(optionIndex);
        if (quizType === "poll") {
            console.log(optionId);
            await axios.patch(
                `${conf.baseUrl}/quiz/update-poll-option-impression`,
                {
                    optionId: optionId,
                }
            );
        } else {
            if (optionIndex === question.correctAnswer) {
                await axios.patch(
                    `${conf.baseUrl}/quiz/update-qna-correct-option-impression`,
                    {
                        questionId: question._id,
                    }
                );
            } else {
                await axios.patch(
                    `${conf.baseUrl}/quiz/update-qna-wrong-option-impression`,
                    {
                        questionId: question._id,
                    }
                );
            }
        }
    };

    const handleNextClick = () => {
        if (question.correctAnswer === selectedOption) {
            setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
        }
        onNextQuestion();
    };

    return (
        <div className={styles.container}>
            <div className={styles.quizContainer}>
                <div className={styles.metadataContainer}>
                    <span className={styles.questionNumber}>
                        0{questionNumber + 1}/0{totalQuestions}
                    </span>
                    {quizType === "qna" ? (
                        <span className={styles.timer}>
                            00:{timeRemaining}s
                        </span>
                    ) : (
                        <span className={styles.timer}></span>
                    )}
                </div>
                <div className={styles.questionDiv}>
                    <p className={styles.question}>{question.questionTitle}</p>
                    <div className={styles.optionsDiv}>
                        {optionsType == "text" &&
                            question?.options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={(e) =>
                                        handleOptionSelect(
                                            question._id,
                                            option._id,
                                            index
                                        )
                                    }
                                    className={`${
                                        selectedOption === index
                                            ? styles.activeOptionBorder
                                            : styles.optionBorder
                                    }`}
                                >
                                    <TextOptionCard option={option} />
                                </div>
                            ))}

                        {optionsType == "image" &&
                            question?.options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={(e) =>
                                        handleOptionSelect(
                                            question._id,
                                            option._id,
                                            index
                                        )
                                    }
                                >
                                    <ImageOptionCard option={option} />
                                </div>
                            ))}

                        {optionsType == "textImage" &&
                            question?.options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={(e) =>
                                        handleOptionSelect(
                                            question._id,
                                            option._id,
                                            index
                                        )
                                    }
                                >
                                    <TextImageOptionCard option={option} />
                                </div>
                            ))}
                    </div>
                </div>
                <button className={styles.button} onClick={handleNextClick}>
                    {questionNumber !== totalQuestions - 1 ? "NEXT" : "SUBMIT"}
                </button>
            </div>
        </div>
    );
}

export default Quiz;
