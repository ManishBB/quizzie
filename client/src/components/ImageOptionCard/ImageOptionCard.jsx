import React from "react";
import styles from "./imageoptioncard.module.css";

function ImageOptionCard({ option }) {
    return (
        <div className={styles.optionContainer}>
            <img
                className={styles.imageOption}
                src={option.imageUrl}
                alt="Image URL unreachable"
                style={{ color: "red" }}
            />
        </div>
    );
}

export default ImageOptionCard;
