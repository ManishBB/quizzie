import React, { useState } from "react";
import styles from "./createquizmodal.module.css";
import DeleteSVG from '../../assets/delete.svg'

function CreateQuizModal() {
    const [quizTitleModal, setQuizTitleModal] = useState(false);
    const [addQuestionsModal, setAddQuestionsModal] = useState(true);
    const [quizCreatedModal, setQuizCreatedModal] = useState(false);

    const [quizName, setQuizName] = useState("");
    const [quizType, setQuizType] = useState("qna");

    const [questions, setQuestions] = useState([""]);
    const [optionsType, setOptionsType] = useState([""]);
    const [options, setOptions] = useState([["", ""]]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleQuizNameChange = (e) => {
        setQuizName(e.target.value);
    };

    const handleQuizTypeChange = (e) => {
        setQuizType(e.target.value);
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
        if (questions.length > 1) {
            const newQuestions = [...questions];
            newQuestions.splice(index, 1);
            setQuestions(newQuestions);

            const newOptions = [...options];
            newOptions.splice(index, 1);
            setOptions(newOptions);

            if (currentQuestionIndex === index) {
                setCurrentQuestionIndex(0);
            } else if (currentQuestionIndex > index) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
            }
        }
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

    const handleQuestionTabClick = (index) => {
        setCurrentQuestionIndex(index);
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
                    />
                    <div className={styles.quizTypeDiv}>
                        <p className={styles.quizTypeText}>Quiz Type</p>
                        <button className={styles.quizTypeButton}>Q & A</button>
                        <button className={styles.quizTypeButton}>
                            Poll Type
                        </button>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <button className={styles.modalButton}>Cancel</button>
                        <button
                            className={styles.modalButton}
                            style={{
                                backgroundColor: "#60B84B",
                                color: "#FFF",
                            }}
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
                                {questions.map((question, index) => (
                                    <button
                                        className={styles.questionNumberButton}
                                        key={index}
                                        onClick={() => handleQuestionTabClick(index)}
                                    >
                                        <p className={styles.questionIndex}>{index + 1}</p>
                                        {questions.length > 1 && (
                                            <button
                                                className={styles.removeQuestionButton}
                                                type="button"
                                                onClick={() => handleRemoveQuestion(currentQuestionIndex)}
                                            >
                                                x
                                            </button>
                                        )}
                                    </button>
                                ))}

                                {questions.length < 5 && (
                                    <button className={styles.addQuestionButton} type="button" onClick={handleAddQuestion}>
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
                            (quizType == "qna") ? "Enter Question Title" : "Enter Poll Title"
                        }
                        id={`question${currentQuestionIndex}`}
                        value={questions[currentQuestionIndex]}
                        onChange={handleQuestionChange}
                    />

                    <div className={styles.optionsTypeGroupDiv}>
                        <p className={styles.optionsTypeGroupText}>Options Type</p>
                        <div className={styles.optionTypeDiv}>
                            <input type="radio" name="optionsType" id="Text" className={styles.optionGroupType} />
                            <label className={styles.optionGroupText} for="Text">Text</label>
                        </div>
                        <div className={styles.optionTypeDiv}>
                            <input type="radio" name="optionsType" id="ImageUrl" className={styles.optionGroupType} />
                            <label className={styles.optionGroupText} for="ImageUrl">Image Url</label>
                        </div>
                        <div className={styles.optionTypeDiv}>
                            <input type="radio" name="optionsType" id="Text&ImageUrl" className={styles.optionGroupType} />
                            <label className={styles.optionGroupText} for="Text&ImageUrl">Text & Image Url</label>
                        </div>
                    </div>

                    <div className={styles.optionsAndTimerDiv} >
                        <div className={styles.optionsDiv}>
                            {options[currentQuestionIndex].map((option, optionIndex) => (
                                <div key={optionIndex} className={styles.option}>
                                    <div className={styles.optionDiv}>
                                        <input type="radio" name="correctAnswer" id="Text" className={styles.correctAnswerBtn} />
                                    </div>
                                    {/* <input
                                        type="text"
                                        id={`option${currentQuestionIndex}-${optionIndex}`}
                                        value={option}
                                        onChange={(e) => handleOptionChange(e, optionIndex)}
                                        className={styles.optionTextOrImageInput}
                                    /> */}

                                    <input
                                        type="text"
                                        id={`option${currentQuestionIndex}-${optionIndex}`}
                                        value={option}
                                        onChange={(e) => handleOptionChange(e, optionIndex)}
                                        className={styles.optionTextInput}
                                        placeholder="Text"
                                    />

                                    <input
                                        type="text"
                                        id={`option${currentQuestionIndex}-${optionIndex}`}
                                        value={option}
                                        onChange={(e) => handleOptionChange(e, optionIndex)}
                                        className={styles.optionImageInput}
                                        placeholder="Image Url"
                                    />

                                    {( optionIndex > 1 && options[currentQuestionIndex].length > 2 ) && (
                                        <img className={styles.svgIcon} src={DeleteSVG} alt="Delete SVG" onClick={() => handleRemoveOption(optionIndex)}/>

                                    )}

                                </div>
                            ))}

                            {options[currentQuestionIndex].length < 4 && (
                                <button className={styles.addOptionBtn} type="button" onClick={handleAddOption}>
                                    Add Option
                                </button>
                            )}
                        </div>
                        <div className={styles.timerDiv}>
                                <p className={styles.timerText}>Timer</p>
                                <button className={styles.timerBtn}>OFF</button>
                                <button className={styles.timerBtn}>5 sec</button>
                                <button className={styles.timerBtn}>10 sec</button>
                        </div>
                    </div>

                    <div className={styles.createQuizModalButtonContainer}>
                            <button className={styles.cancelBtn}>Cancel</button>
                            <button className={styles.createQuizBtn}>Create Quiz</button>
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
                        >
                            Share
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateQuizModal;
