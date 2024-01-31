import React from "react";
import styles from "./statcard.module.css";

function StatCard({ color, data, message }) {
    return (
        <div className={styles.statcard}>
            <div className={styles.statContainer} style={{ color: color }}>
                <p className={styles.countStat}>{data ? data : 0}</p>
                <p className={styles.countText}>{message}</p>
            </div>
        </div>
    );
}

export default StatCard;
