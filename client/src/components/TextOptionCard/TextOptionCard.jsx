import React from "react";
import styles from "./textoptioncard.module.css";

function TextOptionCard({ option }) {
    return (
        <div className={styles.optionContainer}>
            <p>{option.text}</p>
        </div>
    );
}

export default TextOptionCard;
