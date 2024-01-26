import React from 'react'
import styles from './textimageoptioncard.module.css'


function TextImageOptionCard() {
  return (
    <div className={styles.optionContainer}>
        <p className={styles.textOption}>Jay Siya Ram 🧡</p>
        <img className={styles.imageOption} src="https://images.herzindagi.info/image/2024/Jan/interesting-facts-about-ram-mandir-new-pic.jpg" alt="Ram Mandir" />
    </div>
  )
}

export default TextImageOptionCard