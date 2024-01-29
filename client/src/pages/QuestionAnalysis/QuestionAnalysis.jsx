import React, { useEffect, useState } from "react";
import styles from "./questionanalysis.module.css";
import QnaOptionImpressioncard from "../../components/QnAOptionImpressionCard/QnaOptionImpressioncard";
import PollOptionImpressionCard from "../../components/PollOptionImpressionCard/PollOptionImpressionCard";
import { useLocation } from "react-router-dom";
import { getQuizImpressionAnalysis } from "../../utils/ApiUtils";

function QuestionAnalysis() {
    const location = useLocation();
    const [quizData, setQuizData] = useState(null);
    let createdAt;

    useEffect(() => {
        const quizId = location?.state;
        const fetchQuizData = async () => {
            const data = await getQuizImpressionAnalysis(quizId);
            setQuizData(data.data);
        };

        fetchQuizData();
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.metadataContainer}>
                Created on :{" "}
                {new Date(quizData?.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
                <br />
                Impressions : {quizData?.impressions}
            </p>

            <div className={styles.wrapper}>
                <p className={styles.heading}>{quizData?.quizName}</p>

                {quizData?.questions?.map((question, index) => (
                    <div className={styles.questionContainer}>
                        <p className={styles.question}>
                            Q.{index + 1} {question.questionTitle} ?
                        </p>
                        {quizData?.quizType === "qna" ? (
                            <div className={styles.optionsTab}>
                                <QnaOptionImpressioncard
                                    impressions={
                                        question.qnaCorrectAnswerImpressions +
                                        question.qnaWrongAnswerImpressions
                                    }
                                    text={"people Attempted the question"}
                                />
                                <QnaOptionImpressioncard
                                    impressions={
                                        question.qnaCorrectAnswerImpressions
                                    }
                                    text={"people answered correctly"}
                                />
                                <QnaOptionImpressioncard
                                    impressions={
                                        question.qnaWrongAnswerImpressions
                                    }
                                    text={"people answered incorrectly"}
                                />
                            </div>
                        ) : (
                            <div className={styles.optionsTab}>
                                {question.options.map((option, i) => (
                                    <PollOptionImpressionCard
                                        impressions={option.impressions}
                                        optionNumber={i + 1}
                                    />
                                ))}
                            </div>
                        )}
                        <hr className={styles.horizontalDivider} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuestionAnalysis;
