import React from "react";
import styles from "./deletemodal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuiz } from "../../utils/ApiUtils";
import { removeDeleteQuizId } from "../../store/metadataSlice";

function DeleteModal({ setDeleteQuizModalActive }) {
    const quizId = useSelector((state) => state.metadata.deleteQuizId);
    const dispatch = useDispatch();
    const handleOnDelete = async () => {
        deleteQuiz(quizId);
        dispatch(removeDeleteQuizId());
        setDeleteQuizModalActive(false);
    };

    const handleOnCancel = async () => {
        setDeleteQuizModalActive(false);
    };

    return (
        <div className={styles.deleteWarningModal}>
            <div className={styles.modalContainer}>
                <p className={styles.modalText}>
                    Are you confirm you want to delete?
                </p>
                <div className={styles.modalButtonsDiv}>
                    <button
                        className={styles.modalButton}
                        style={{ backgroundColor: "#FF4B4B", color: "#FFF" }}
                        onClick={handleOnDelete}
                    >
                        Confirm Delete
                    </button>
                    <button
                        className={styles.modalButton}
                        onClick={handleOnCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
