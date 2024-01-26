import React, { useState } from "react";

const QuizCreator = () => {
    const [quizName, setQuizName] = useState("");
    const [quizType, setQuizType] = useState("qna");
    const [questions, setQuestions] = useState([""]);
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
        <div>
            <div className="form-group">
                <label htmlFor="quizName">Quiz Name</label>
                <input
                    type="text"
                    id="quizName"
                    value={quizName}
                    onChange={handleQuizNameChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="quizType">Quiz Type</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="quizType"
                            value="qna"
                            checked={quizType === "qna"}
                            onChange={handleQuizTypeChange}
                        />
                        Q&A
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="quizType"
                            value="poll"
                            checked={quizType === "poll"}
                            onChange={handleQuizTypeChange}
                        />
                        Poll
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor={`question${currentQuestionIndex}`}>
                    Question {currentQuestionIndex + 1}
                </label>
                <input
                    type="text"
                    id={`question${currentQuestionIndex}`}
                    value={questions[currentQuestionIndex]}
                    onChange={handleQuestionChange}
                />
                {options[currentQuestionIndex].map((option, optionIndex) => (
                    <div className="form-group" key={optionIndex}>
                        <label
                            htmlFor={`option${currentQuestionIndex}-${optionIndex}`}
                        >
                            Option {optionIndex + 1}
                        </label>
                        <input
                            type="text"
                            id={`option${currentQuestionIndex}-${optionIndex}`}
                            value={option}
                            onChange={(e) => handleOptionChange(e, optionIndex)}
                        />
                        {options[currentQuestionIndex].length > 2 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveOption(optionIndex)}
                            >
                                Remove Option
                            </button>
                        )}
                    </div>
                ))}
                {options[currentQuestionIndex].length < 4 && (
                    <button type="button" onClick={handleAddOption}>
                        Add Option
                    </button>
                )}
            </div>
            <div>
                {questions.map((question, index) => (
                    <button
                        key={index}
                        onClick={() => handleQuestionTabClick(index)}
                        style={{
                            fontWeight:
                                currentQuestionIndex === index
                                    ? "bold"
                                    : "normal",
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            {questions.length < 5 && (
                <button type="button" onClick={handleAddQuestion}>
                    Add Question
                </button>
            )}
            {questions.length > 1 && (
                <button
                    type="button"
                    onClick={() => handleRemoveQuestion(currentQuestionIndex)}
                >
                    Remove Question
                </button>
            )}
        </div>
    );
};

export default QuizCreator;
