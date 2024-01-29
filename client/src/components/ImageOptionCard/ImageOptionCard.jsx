import React from "react";
import styles from "./imageoptioncard.module.css";

function ImageOptionCard({ option }) {
    return (
        <div className={styles.optionContainer}>
            <img
                className={styles.imageOption}
                src={option.imageUrl}
                alt="Ram Mandir"
            />
        </div>
    );
}

export default ImageOptionCard;
