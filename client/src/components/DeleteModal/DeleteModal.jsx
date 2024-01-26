import React from "react";
import styles from "./deletemodal.module.css";

function DeleteModal({ setDeleteQuizModalActive }) {
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
                        onClick={(e) => setDeleteQuizModalActive(false)}
                    >
                        Confirm Delete
                    </button>
                    <button
                        className={styles.modalButton}
                        onClick={(e) => setDeleteQuizModalActive(false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
