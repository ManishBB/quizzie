import React, { useEffect, useState } from "react";
import styles from "./quiz.module.css";
import TextOptionCard from "../../components/TextOptionCard/TextOptionCard";
import ImageOptionCard from "../../components/ImageOptionCard/ImageOptionCard";
import TextImageOptionCard from "../../components/TextImageOptionCard/TextImageOptionCard";

function Quiz({
    questionNumber,
    totalQuestions,
    question,
    timer,
    optionsType,
    onNextQuestion,
    currentQuestionIndex,
    setCorrectAnswers,
}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(timer);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);

        if (timeRemaining === 0) {
            clearInterval(countdown);
            onNextQuestion();
        }

        return () => clearInterval(countdown);
    }, [timeRemaining]);

    useEffect(() => {
        setTimeRemaining(timer);
        setSelectedOption(null);
    }, [currentQuestionIndex]);

    const handleOptionSelect = (optionIndex) => {
        setSelectedOption(optionIndex);
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
                    <span className={styles.timer}>00:{timeRemaining}s</span>
                </div>
                <div className={styles.questionDiv}>
                    <p className={styles.question}>{question.questionTitle}</p>
                    <div className={styles.optionsDiv}>
                        {optionsType == "text" &&
                            question?.options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={(e) => handleOptionSelect(index)}
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
                                    onClick={(e) => handleOptionSelect(index)}
                                >
                                    <ImageOptionCard option={option} />
                                </div>
                            ))}

                        {optionsType == "textImage" &&
                            question?.options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={(e) => handleOptionSelect(index)}
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
