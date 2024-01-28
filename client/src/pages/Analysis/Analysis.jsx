import React from "react";
import styles from "./analysis.module.css";
import EditSVG from "../../assets/edit.svg";
import DeleteSVG from "../../assets/delete.svg";
import ShareSVG from "../../assets/share.svg";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

function Analysis() {
    const [isDeleteQuizModalActive, setDeleteQuizModalActive] =
        useOutletContext();

    const quizzesData = useSelector((state) => state.quizzes.createdQuizzes);

    console.log(quizzesData);

    const quizAnalysisData = [
        {
            srNo: 1,
            quiz: "Quiz 1",
            createdOn: "2021-01-01",
            impressions: 100,
            quizLink: "https://manishbhamare.live",
        },
        {
            srNo: 2,
            quiz: "Quiz 2",
            createdOn: "2021-02-01",
            impressions: 150,
            quizLink: "https://manishbhamare.live",
        },
        // Add more quiz analysis data here...
    ];

    const handleEditClick = (quizId) => {
        // Handle edit button click logic here...
    };

    const handleDeleteClick = (quizId) => {
        // Handle delete button click logic here...
        setDeleteQuizModalActive(true);
        console.log(isDeleteQuizModalActive);
    };

    const handleShareClick = (quizId) => {
        // Handle share button click logic here...
    };

    const handleQuizAnalysisClick = (quizId) => {
        // Handle quiz analysis button click logic here...
    };

    return (
        <div className={styles.analysisContainer}>
            <h1 className={styles.heading}>Quiz Analysis</h1>
            <div className={styles.tableContainer}>
                <table>
                    <thead className={styles.tableHeading}>
                        <tr className={styles.tableHeading}>
                            <th>Sr No</th>
                            <th>Quiz</th>
                            <th>Created On</th>
                            <th>Impressions</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {quizzesData.map((quiz, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{quiz.quizName}</td>
                                <td>{"11 Sep. 2020"}</td>
                                <td>{quiz.impressions}</td>
                                <td>
                                    <img
                                        className={styles.svgIcon}
                                        src={EditSVG}
                                        alt="Edit SVG"
                                        onClick={() =>
                                            handleEditClick(quiz._id)
                                        }
                                    />
                                </td>
                                <td>
                                    <img
                                        className={styles.svgIcon}
                                        src={DeleteSVG}
                                        alt="Delete SVG"
                                        onClick={() =>
                                            handleDeleteClick(quiz._id)
                                        }
                                    />
                                </td>
                                <td>
                                    <img
                                        className={styles.svgIcon}
                                        src={ShareSVG}
                                        alt="Share SVG"
                                        onClick={() =>
                                            handleShareClick(quiz._id)
                                        }
                                    />
                                </td>
                                <td>
                                    <a href={quiz.quizLink}>
                                        Question Wise Analysis
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Analysis;
