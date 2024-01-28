import React from "react";
import styles from "./qnaoptionimpressioncard.module.css";

function QnaOptionImpressioncard({ impressions, text }) {
    return (
        <div className={styles.container}>
            <p className={styles.impressionCount}>{impressions}</p>
            <p className={styles.impressionData}>{text}</p>
        </div>
    );
}

export default QnaOptionImpressioncard;
