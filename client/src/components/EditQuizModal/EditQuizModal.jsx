import React, { useEffect, useState } from "react";
import styles from "./editquizmodal.module.css";
import DeleteSVG from "../../assets/delete.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import conf from "../../config/config";
import axios from "axios";
import { getQuiz } from "../../utils/ApiUtils";
import { useSelector } from "react-redux";

function EditQuizModal({ setIsEditQuizModalActive }) {
    const [quizTitleModal, setQuizTitleModal] = useState(true);
    const [addQuestionsModal, setAddQuestionsModal] = useState(false);
    const [quizCreatedModal, setQuizCreatedModal] = useState(false);

    const [quizName, setQuizName] = useState("");
    const [quizType, setQuizType] = useState("qna");
    const [quizTimer, setQuizTimer] = useState(0);

    const [questions, setQuestions] = useState([""]);
    const [quizOptionsType, setOptionsType] = useState("text");
    const [options, setOptions] = useState([
        [
            { text: "", imageUrl: "" },
            { text: "", imageUrl: "" },
        ],
    ]);
    const [correctAnswer, setCorrectAnswer] = useState(["", "", "", ""]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [quizUrl, setQuizUrl] = useState("");

    const quizId = useSelector((state) => state.metadata.editQuizId);

    const [quiz, setQuiz] = useState();

    useEffect(() => {
        const mapDataToFields = (quiz) => {
            setQuizName(quiz?.quizName);
            setQuizType(quiz?.quizType);

            let questions = [];
            let correctAnswer = [];
            let options = [[], []];

            quiz.questions.map((question, index) => {
                questions[index] = question.questionTitle;
                correctAnswer[index] = question.correctAnswer;

                question.options.map((option, optionIndex) => {
                    options[index][optionIndex] = option;
                    console.log(option);
                });
            });

            setQuestions(questions);
            setOptions(options);
            setCorrectAnswer(correctAnswer);
            setOptionsType(quiz?.optionsType);
            setQuizTimer(quiz?.timer);

            console.log(questions, correctAnswer, quiz.optionsType);
            console.log(quizType);
        };

        const fetchQuizData = async () => {
            const quizData = await getQuiz(quizId);
            await axios.patch(`${conf.baseUrl}/quiz/update-quiz-impression`, {
                quizId: quizId,
            });
            console.log(quizData.data);
            setQuiz(quizData.data);
            mapDataToFields(quizData.data);
        };
        fetchQuizData();
    }, []);

    useEffect(() => {}, [quiz]);

    useEffect(() => {}, [
        questions,
        options,
        currentQuestionIndex,
        correctAnswer,
        quizUrl,
    ]);

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
        if (quizOptionsType === "text") {
            const newOptions = [...options];
            newOptions[currentQuestionIndex][optionIndex].text = e.target.value;
            setOptions(newOptions);
        } else {
            const newOptions = [...options];
            newOptions[currentQuestionIndex][optionIndex].imageUrl =
                e.target.value;
            setOptions(newOptions);
        }
    };

    const handleTextOptionChange = (e, optionIndex) => {
        const newOptions = [...options];
        newOptions[currentQuestionIndex][optionIndex].text = e.target.value;
        setOptions(newOptions);
    };

    const handleImageUrlOptionChange = (e, optionIndex) => {
        const newOptions = [...options];
        newOptions[currentQuestionIndex][optionIndex].imageUrl = e.target.value;
        setOptions(newOptions);
    };

    const handleAddQuestion = () => {
        if (questions.length < 5) {
            setQuestions([...questions, ""]);
            setOptions([
                ...options,
                [
                    { text: "", imageUrl: "" },
                    { text: "", imageUrl: "" },
                ],
            ]);
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
            newOptions[currentQuestionIndex].push({ text: "", imageUrl: "" });
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

    const handleUpdateQuiz = async () => {
        if (quizType === "poll") {
            for (let i = 0; i < questions.length; i++) {
                correctAnswer[i] = 0;
            }
        }

        for (let i = 0; i < questions.length; i++) {
            if (questions[i] === "") {
                alert("Please enter the question number " + (i + 1));
                return;
            }

            for (let j = 0; j < options[i].length; j++) {
                if (quizOptionsType === "text") {
                    if (options[i][j].text === "") {
                        alert(
                            "Please enter the option number " +
                                (j + 1) +
                                " for the question number " +
                                (i + 1)
                        );
                        return;
                    }
                }
                if (quizOptionsType === "image") {
                    if (options[i][j].imageUrl === "") {
                        alert(
                            "Please enter the option number " +
                                (j + 1) +
                                " for the question number " +
                                (i + 1)
                        );
                        return;
                    }
                }
                if (quizOptionsType === "textImage") {
                    if (
                        options[i][j].text === "" ||
                        options[i][j].imageUrl === ""
                    ) {
                        alert(
                            "Please enter the option number " +
                                (j + 1) +
                                " for the question number " +
                                (i + 1)
                        );
                        return;
                    }
                }
            }

            if (correctAnswer[i] === "") {
                alert(
                    "Please select correct answer for the question " + (i + 1)
                );
                return;
            }
        }

        const quiz = {
            quizId: quizId,
            quizName: quizName,
            quizType: quizType,
            timer: quizTimer,
            optionsType: quizOptionsType,
            questions: questions.map((question, index) => {
                return {
                    questionTitle: questions[index],
                    correctAnswer: correctAnswer[index],
                    options: options[index].map((option, optionIndex) => {
                        if (quizOptionsType === "text") {
                            return {
                                text: option.text,
                                imageUrl: "",
                            };
                        } else if (quizOptionsType === "image") {
                            return {
                                text: "",
                                imageUrl: option.imageUrl,
                            };
                        } else if (quizOptionsType === "textImage") {
                            return {
                                text: option.text,
                                imageUrl: option.imageUrl,
                            };
                        }
                    }),
                };
            }),
        };

        try {
            const response = await axios.patch(
                `${conf.baseUrl}/quiz/update-quiz`,
                {
                    ...quiz,
                },
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem("accessToken")
                        )}`,
                    },
                }
            );
            const { data } = response.data;

            console.log(response.data.statusCode);

            if (response.data.statusCode == 200) {
                setQuizUrl(`http://localhost:5173/quiz/${data._id}`);
                setAddQuestionsModal(false);
                setQuizCreatedModal(true);
                console.log(quizUrl);
            } else {
                alert(
                    "Something went wrong while creating field! Please check if all fields are correctly formatted or check your network connection"
                );
            }
        } catch (error) {
            alert("Something went wrong while creating quiz!");
        }
    };

    const handleShareLink = () => {
        navigator.clipboard.writeText(`${quizUrl}`);
        toast.success("Link copied to clipboard");
    };

    const handleCloseModal = () => {
        setIsEditQuizModalActive(false);
    };

    return (
        <div className={styles.createQuizModal}>
            {quizTitleModal && (
                <div className={styles.quizTitleModalContainer}>
                    <p className={styles.editTitle}>Edit Your Quiz</p>
                    <input
                        className={styles.quizNameInput}
                        type="text"
                        name="quizName"
                        id="quizName"
                        value={quizName}
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
                            onClick={(e) => setIsEditQuizModalActive(false)}
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
                    <p className={styles.editTitle}>Edit Your Quiz</p>
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
                                checked={quizOptionsType === "text"}
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
                                checked={quizOptionsType === "image"}
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
                                checked={quizOptionsType === "textImage"}
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
                                                    className={`${
                                                        styles.correctAnswerBtn
                                                    } ${
                                                        quizType === "poll"
                                                            ? styles.radioButtonOnPollType
                                                            : ""
                                                    }`}
                                                    checked={
                                                        optionIndex ===
                                                        correctAnswer[
                                                            currentQuestionIndex
                                                        ]
                                                    }
                                                    onClick={(e) =>
                                                        handleCorrectAnswer(
                                                            optionIndex
                                                        )
                                                    }
                                                />
                                            </div>

                                            {quizOptionsType == "text" && (
                                                <input
                                                    type="text"
                                                    id={`option${currentQuestionIndex}-${optionIndex}`}
                                                    value={option.text}
                                                    onChange={(e) =>
                                                        handleOptionChange(
                                                            e,
                                                            optionIndex
                                                        )
                                                    }
                                                    placeholder="Text"
                                                    className={`${
                                                        styles.optionTextOrImageInput
                                                    } ${
                                                        optionIndex ===
                                                        correctAnswer[
                                                            currentQuestionIndex
                                                        ]
                                                            ? styles.correctAnswer
                                                            : ""
                                                    }`}
                                                />
                                            )}

                                            {quizOptionsType == "image" && (
                                                <input
                                                    type="text"
                                                    id={`option${currentQuestionIndex}-${optionIndex}`}
                                                    value={option.imageUrl}
                                                    onChange={(e) =>
                                                        handleOptionChange(
                                                            e,
                                                            optionIndex
                                                        )
                                                    }
                                                    placeholder="Image URL"
                                                    className={`${
                                                        styles.optionTextOrImageInput
                                                    } ${
                                                        optionIndex ===
                                                        correctAnswer[
                                                            currentQuestionIndex
                                                        ]
                                                            ? styles.correctAnswer
                                                            : ""
                                                    }`}
                                                />
                                            )}

                                            {quizOptionsType == "textImage" && (
                                                <>
                                                    {" "}
                                                    <input
                                                        type="text"
                                                        id={`option${currentQuestionIndex}-${optionIndex}`}
                                                        value={option.text}
                                                        onChange={(e) =>
                                                            handleTextOptionChange(
                                                                e,
                                                                optionIndex
                                                            )
                                                        }
                                                        className={`${
                                                            styles.optionTextInput
                                                        } ${
                                                            optionIndex ===
                                                            correctAnswer[
                                                                currentQuestionIndex
                                                            ]
                                                                ? styles.correctAnswer
                                                                : ""
                                                        }`}
                                                        placeholder="Text"
                                                    />
                                                    <input
                                                        type="text"
                                                        id={`imageOption${currentQuestionIndex}-${optionIndex}`}
                                                        value={option.imageUrl}
                                                        onChange={(e) =>
                                                            handleImageUrlOptionChange(
                                                                e,
                                                                optionIndex
                                                            )
                                                        }
                                                        className={`${
                                                            styles.optionImageInput
                                                        } ${
                                                            optionIndex ===
                                                            correctAnswer[
                                                                currentQuestionIndex
                                                            ]
                                                                ? styles.correctAnswer
                                                                : ""
                                                        }`}
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
                            onClick={(e) => setIsEditQuizModalActive(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.createQuizBtn}
                            onClick={handleUpdateQuiz}
                        >
                            Update Quiz
                        </button>
                    </div>
                </div>
            )}

            {quizCreatedModal && (
                <div className={styles.quizCreatedContainer}>
                    <span
                        className={styles.quizCreatedCloseButton}
                        onClick={handleCloseModal}
                    >
                        x
                    </span>
                    <p className={styles.quizCreatedText}>
                        Your Quiz is Updated!
                    </p>
                    <div className={styles.quizLinkDiv}>
                        <p className={styles.quizLink}>
                            {quizUrl ? quizUrl : "Please Wait..."}
                        </p>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <button
                            className={styles.shareButton}
                            style={{
                                backgroundColor: "#60B84B",
                                color: "#FFF",
                            }}
                            onClick={handleShareLink}
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

export default EditQuizModal;
