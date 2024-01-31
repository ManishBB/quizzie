import React from "react";
import styles from "./textimageoptioncard.module.css";

function TextImageOptionCard({ option }) {
    return (
        <div className={styles.optionContainer}>
            <p className={styles.textOption}>{option.text}</p>
            <img
                className={styles.imageOption}
                src={option.imageUrl}
                alt="Image URL unreachable"
                style={{ color: "red" }}
            />
        </div>
    );
}

export default TextImageOptionCard;
