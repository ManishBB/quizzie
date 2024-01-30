import React, { useEffect, useState } from "react";
import styles from "./createquizmodal.module.css";
import DeleteSVG from "../../assets/delete.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateQuizModal({ setIsCreateQuizModalActive }) {
    const [quizTitleModal, setQuizTitleModal] = useState(true);
    const [addQuestionsModal, setAddQuestionsModal] = useState(false);
    const [quizCreatedModal, setQuizCreatedModal] = useState(false);

    const [quizName, setQuizName] = useState("");
    const [quizType, setQuizType] = useState("qna");
    const [quizTimer, setQuizTimer] = useState(0);

    const [questions, setQuestions] = useState([""]);
    const [optionsType, setOptionsType] = useState("text");
    const [options, setOptions] = useState([["", ""]]);
    const [correctAnswer, setCorrectAnswer] = useState(["", "", "", ""])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => { console.log(correctAnswer);}, [questions, options, currentQuestionIndex, correctAnswer]);

    const handleQuizTypeChangeToQnA = (e) => {
        setQuizType("qna");
    };

    const handleQuizTypeChangeToPoll = (e) => {
        setQuizType("poll");
    };

    const handleNextTab = (e) => {
        if (quizName === "") {
            alert("Please enter the quiz name!");
            return;
        }

        setQuizTitleModal(false);
        setAddQuestionsModal(true);
    };

    const handleOptionTypeChange = (e) => {
        setOptionsType(e.target.value);
    };

    const handleQuestionChange = (e) => {
        const newQuestions = [...questions];
        newQuestions[currentQuestionIndex] = e.target.value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (e, optionIndex) => {
        const newOptions = [...options];
        newOptions[currentQuestionIndex][optionIndex] = e.target.value;
        setOptions(newOptions);
    };

    const handleAddQuestion = () => {
        if (questions.length < 5) {
            setQuestions([...questions, ""]);
            setOptions([...options, ["", ""]]);
            setCurrentQuestionIndex(questions.length);
        }
    };

    const handleRemoveQuestion = (index) => {
        if (index == 0) {
            if (currentQuestionIndex != index) {
                setCurrentQuestionIndex((prev) => prev - 1);
            }
        }

        if (index >= questions.length - 1) {
            if (currentQuestionIndex != 0) {
                setCurrentQuestionIndex((prev) => prev - 1);
            }
        }

        if (index > 0 && index < questions.length - 1) {
            if (currentQuestionIndex >= index) {
                setCurrentQuestionIndex((prev) => prev - 1);
            }
        }

        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
        const newOptions = [...options];
        newOptions.splice(index, 1);
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        if (options[currentQuestionIndex].length < 4) {
            const newOptions = [...options];
            newOptions[currentQuestionIndex].push("");
            setOptions(newOptions);
        }
    };

    const handleRemoveOption = (optionIndex) => {
        if (options[currentQuestionIndex].length > 2) {
            const newOptions = [...options];
            newOptions[currentQuestionIndex].splice(optionIndex, 1);
            setOptions(newOptions);
        }
    };

    const handleCorrectAnswer = (optionIndex) => {
        const updatedAnswers = [...correctAnswer]; // Create a copy of the original array
        updatedAnswers.splice(currentQuestionIndex, 1, optionIndex); // Insert the new answer at the specified index
        setCorrectAnswer(updatedAnswers);
    };

    const handleQuestionTabClick = (index) => {
        setCurrentQuestionIndex(index);
    };

    const handleCreateQuiz = async () => {
        const quiz = {
            quizName: quizName,
            quizType: quizType,
            timer: quizTimer,
            optionsType: optionsType,
            questions: questions.map((question, index) => {
                return {
                    questionTitle: question.questionTitle,
                    correctAnswer: 1,
                    options: options[index].map((option) => {
                        return {
                            option,
                        };
                    }),
                };
            }),
        };

        console.log(quiz);
    };

    const notify = () => {
        toast.success("Link copied to clipboard");
    };

    return (
        <div className={styles.createQuizModal}>
            {quizTitleModal && (
                <div className={styles.quizTitleModalContainer}>
                    <input
                        className={styles.quizNameInput}
                        type="text"
                        name="quizName"
                        id="quizName"
                        placeholder="Quiz Name"
                        onChange={(e) => setQuizName(e.target.value)}
                    />
                    <div className={styles.quizTypeDiv}>
                        <p className={styles.quizTypeText}>Quiz Type</p>
                        <button
                            className={`${styles.quizTypeButton} ${
                                quizType == "qna"
                                    ? styles.quizTypeButtonActicated
                                    : ""
                            }`}
                            onClick={handleQuizTypeChangeToQnA}
                        >
                            Q & A
                        </button>
                        <button
                            className={`${styles.quizTypeButton} ${
                                quizType == "poll"
                                    ? styles.quizTypeButtonActicated
                                    : ""
                            }`}
                            onClick={handleQuizTypeChangeToPoll}
                        >
                            Poll Type
                        </button>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <button
                            className={styles.modalButton}
                            onClick={(e) => setIsCreateQuizModalActive(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.modalButton}
                            style={{
                                backgroundColor: "#60B84B",
                                color: "#FFF",
                            }}
                            onClick={handleNextTab}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {addQuestionsModal && (
                <div className={styles.modalContainer}>
                    <div className={styles.questionNumbersDiv}>
                        <div className={styles.questionNumbers}>
                            <div>
                                {questions?.map((question, index) => (
                                    <>
                                        <button
                                            className={
                                                styles.questionNumberButton
                                            }
                                            key={index}
                                            onClick={() =>
                                                handleQuestionTabClick(index)
                                            }
                                        >
                                            <p className={styles.questionIndex}>
                                                {index + 1}
                                            </p>
                                        </button>
                                        {questions.length > 1 && (
                                            <button
                                                className={
                                                    styles.removeQuestionButton
                                                }
                                                type="button"
                                                onClick={(e) =>
                                                    handleRemoveQuestion(index)
                                                }
                                            >
                                                x
                                            </button>
                                        )}
                                    </>
                                ))}

                                {questions.length < 5 && (
                                    <button
                                        className={styles.addQuestionButton}
                                        type="button"
                                        onClick={handleAddQuestion}
                                    >
                                        +
                                    </button>
                                )}
                            </div>
                        </div>

                        <p className={styles.questionLimitText}>
                            Max 5 questions
                        </p>
                    </div>

                    <input
                        className={styles.addQuestionTextInput}
                        type="text"
                        name="questionTitle"
                        placeholder={
                            quizType == "qna"
                                ? "Enter Question Title"
                                : "Enter Poll Title"
                        }
                        id={`question${currentQuestionIndex}`}
                        value={questions[currentQuestionIndex]}
                        onChange={handleQuestionChange}
                    />

                    <div className={styles.optionsTypeGroupDiv}>
                        <p className={styles.optionsTypeGroupText}>
                            Options Type
                        </p>
                        <div className={styles.optionTypeDiv}>
                            <input
                                type="radio"
                                name="optionsType"
                                id="Text"
                                value="text"
                                className={styles.optionGroupType}
                                checked={optionsType === "text"}
                                onChange={handleOptionTypeChange}
                            />
                            <label
                                className={styles.optionGroupText}
                                htmlFor="Text"
                            >
                                Text
                            </label>
                        </div>
                        <div className={styles.optionTypeDiv}>
                            <input
                                type="radio"
                                name="optionsType"
                                id="ImageUrl"
                                value="image"
                                className={styles.optionGroupType}
                                checked={optionsType === "image"}
                                onChange={handleOptionTypeChange}
                            />
                            <label
                                className={styles.optionGroupText}
                                htmlFor="ImageUrl"
                            >
                                Image Url
                            </label>
                        </div>
                        <div className={styles.optionTypeDiv}>
                            <input
                                type="radio"
                                name="optionsType"
                                id="Text&ImageUrl"
                                value="textImage"
                                className={styles.optionGroupType}
                                checked={optionsType === "textImage"}
                                onChange={handleOptionTypeChange}
                            />
                            <label
                                className={styles.optionGroupText}
                                htmlFor="Text&ImageUrl"
                            >
                                Text & Image Url
                            </label>
                        </div>
                    </div>

                    <div className={styles.optionsAndTimerDiv}>
                        <div className={styles.optionsDiv}>
                            {options[currentQuestionIndex] &&
                                options[currentQuestionIndex].map(
                                    (option, optionIndex) => (
                                        <div
                                            key={optionIndex}
                                            className={styles.option}
                                        >
                                            <div className={styles.optionDiv}>
                                                <input
                                                    type="radio"
                                                    name="correctAnswer"
                                                    id="Text"
                                                    className={
                                                        styles.correctAnswerBtn
                                                    }
                                                    checked={optionIndex === correctAnswer[currentQuestionIndex]}
                                                    onClick={(e) => handleCorrectAnswer(optionIndex)}
                                                />
                                            </div>

                                            {optionsType == "text" && (
                                                <input
                                                    type="text"
                                                    id={`option${currentQuestionIndex}-${optionIndex}`}
                                                    value={option}
                                                    onChange={(e) =>
                                                        handleOptionChange(
                                                            e,
                                                            optionIndex
                                                        )
                                                    }
                                                    placeholder="Text"
                                                    className={
                                                         `${styles.optionTextOrImageInput} ${
                                                            optionIndex === correctAnswer[currentQuestionIndex]
                                                                ? styles.correctAnswer
                                                                : ''
                                                        }`
                                                    }
                                                />
                                            )}

                                            {optionsType == "image" && (
                                                <input
                                                    type="text"
                                                    id={`option${currentQuestionIndex}-${optionIndex}`}
                                                    value={option}
                                                    onChange={(e) =>
                                                        handleOptionChange(
                                                            e,
                                                            optionIndex
                                                        )
                                                    }
                                                    placeholder="Image URL"
                                                    className={
                                                         `${styles.optionTextOrImageInput} ${
                                                            optionIndex === correctAnswer[currentQuestionIndex]
                                                                ? styles.correctAnswer
                                                                : ''
                                                        }`
                                                    }
                                                />
                                            )}

                                            {optionsType == "textImage" && (
                                                <>
                                                    {" "}
                                                    <input
                                                        type="text"
                                                        id={`option${currentQuestionIndex}-${optionIndex}`}
                                                        value={option}
                                                        onChange={(e) =>
                                                            handleOptionChange(
                                                                e,
                                                                optionIndex
                                                            )
                                                        }
                                                        className={
                                                            `${styles.optionTextInput} ${
                                                            optionIndex === correctAnswer[currentQuestionIndex]
                                                                ? styles.correctAnswer
                                                                : ''
                                                        }`
                                                        }

                                                        placeholder="Text"
                                                    />
                                                    <input
                                                        type="text"
                                                        id={`option${currentQuestionIndex}-${optionIndex}`}
                                                        value={option}
                                                        onChange={(e) =>
                                                            handleOptionChange(
                                                                e,
                                                                optionIndex
                                                            )
                                                        }
                                                        className={
                                                            `${styles.optionImageInput} ${
                                                            optionIndex === correctAnswer[currentQuestionIndex]
                                                                ? styles.correctAnswer
                                                                : ''
                                                        }`
                                                        }
                                                        placeholder="Image Url"
                                                    />
                                                </>
                                            )}

                                            {optionIndex > 1 &&
                                                options[currentQuestionIndex]
                                                    .length > 2 && (
                                                    <img
                                                        className={
                                                            styles.svgIcon
                                                        }
                                                        src={DeleteSVG}
                                                        alt="Delete SVG"
                                                        onClick={() =>
                                                            handleRemoveOption(
                                                                optionIndex
                                                            )
                                                        }
                                                    />
                                                )}
                                        </div>
                                    )
                                )}

                            {options[currentQuestionIndex] &&
                                options[currentQuestionIndex].length < 4 && (
                                    <button
                                        className={styles.addOptionBtn}
                                        type="button"
                                        onClick={handleAddOption}
                                    >
                                        Add Option
                                    </button>
                                )}
                        </div>
                        <div className={styles.timerDiv}>
                            {quizType === "qna" && (
                                <>
                                    <p className={styles.timerText}>Timer</p>
                                    <button
                                        className={`${styles.timerBtn} ${
                                            quizTimer == "0"
                                                ? styles.activatedTimerBtn
                                                : ""
                                        }`}
                                        onClick={(e) => setQuizTimer(0)}
                                    >
                                        OFF
                                    </button>
                                    <button
                                        className={`${styles.timerBtn} ${
                                            quizTimer == "5"
                                                ? styles.activatedTimerBtn
                                                : ""
                                        }`}
                                        onClick={(e) => setQuizTimer(5)}
                                    >
                                        5 sec
                                    </button>
                                    <button
                                        className={`${styles.timerBtn} ${
                                            quizTimer == "10"
                                                ? styles.activatedTimerBtn
                                                : ""
                                        }`}
                                        onClick={(e) => setQuizTimer(10)}
                                    >
                                        10 sec
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className={styles.createQuizModalButtonContainer}>
                        <button
                            className={styles.cancelBtn}
                            onClick={(e) => setIsCreateQuizModalActive(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.createQuizBtn}
                            onClick={handleCreateQuiz}
                        >
                            Create Quiz
                        </button>
                    </div>
                </div>
            )}

            {quizCreatedModal && (
                <div className={styles.quizCreatedContainer}>
                    <p className={styles.quizCreatedText}>
                        Congrats your Quiz is Published!
                    </p>
                    <div className={styles.quizLinkDiv}>
                        <p className={styles.quizLink}>Quiz Type</p>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <button
                            className={styles.shareButton}
                            style={{
                                backgroundColor: "#60B84B",
                                color: "#FFF",
                            }}
                            onClick={notify}
                        >
                            Share
                        </button>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition:Bounce
                    />
                </div>
            )}
        </div>
    );
}

export default CreateQuizModal;
