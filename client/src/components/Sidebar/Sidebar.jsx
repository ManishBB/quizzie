import React from "react";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";

function Sidebar({ setIsCreateQuizModalActive }) {
    const navigate = useNavigate();

    return (
        <div className={styles.sidebar}>
            <h1 className={styles.title}>QUIZZIE</h1>
            <div className={styles.sidebarMenu}>
                <h3
                    className={styles.sidebarBtn}
                    onClick={(e) => navigate("/")}
                >
                    Dashboard
                </h3>
                <h3
                    className={styles.sidebarBtn}
                    onClick={(e) => navigate("/analysis")}
                >
                    Analytics
                </h3>
                <h3
                    className={styles.sidebarBtn}
                    onClick={(e) => setIsCreateQuizModalActive(true)}
                >
                    CreateQuiz
                </h3>
            </div>
            <div>
                <hr style={{ border: "1px solid" }} />
                <h3 className={styles.sidebarBtn}>LOGOUT</h3>
            </div>
        </div>
    );
}

export default Sidebar;
