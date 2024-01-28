import React from "react";
import styles from "./polloptionimpressioncard.module.css";

function PollOptionImpressionCard({ impressions, optionNumber }) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.impressionCount}>{impressions}</p>
                <p className={styles.impressionData}>Option {optionNumber}</p>
            </div>
        </div>
    );
}

export default PollOptionImpressionCard;
