import React from "react";
import styles from "./analysis.module.css";
import EditSVG from "../../assets/edit.svg";
import DeleteSVG from "../../assets/delete.svg";
import ShareSVG from "../../assets/share.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDeleteQuizId, getEditQuizId } from "../../store/metadataSlice";

function Analysis() {
    const [
        isDeleteQuizModalActive,
        setDeleteQuizModalActive,
        isCreateQuizModalActive,
        setIsCreateQuizModalActive,
        isEditQuizModalActive,
        setIsEditQuizModalActive,
    ] = useOutletContext();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const quizzesData = useSelector((state) => state.quizzes.createdQuizzes);

    const handleEditClick = (quizId) => {
        // Handle edit button click logic here...
        dispatch(getEditQuizId(quizId));
        setIsEditQuizModalActive(true);
    };

    const handleDeleteClick = (quizId) => {
        // Handle delete button click logic here...
        dispatch(getDeleteQuizId(quizId));
        setDeleteQuizModalActive(true);
        console.log(isDeleteQuizModalActive);
    };

    const handleShareClick = (quizId) => {
        // Handle share button click logic here...
        navigator.clipboard.writeText(
            `https://quizzie-theta.vercel.app/quiz/${quizId}`
        );
        toast.success("Link copied to clipboard");
    };

    const handleQuizAnalysisClick = (quizId) => {
        // Handle quiz analysis button click logic here...
        navigate(`/question-analysis/${quizId}`, { state: quizId });
    };

    return quizzesData ? (
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
                        {quizzesData?.map((quiz, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{quiz.quizName}</td>
                                <td>
                                    {new Date(
                                        quiz?.createdAt
                                    ).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </td>
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
                                    <a
                                        href={quiz.quizLink}
                                        onClick={() =>
                                            handleQuizAnalysisClick(quiz._id)
                                        }
                                    >
                                        Question Wise Analysis
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
        </div>
    ) : (
        <div className={styles.analysisContainer}>
            <div className={StylePropertyMap.loaderContainer}>
                <div className={styles.loader}></div>
            </div>
        </div>
    );
}

export default Analysis;
