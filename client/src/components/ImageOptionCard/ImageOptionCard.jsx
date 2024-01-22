import React from 'react'
import styles from './imageoptioncard.module.css'

function ImageOptionCard() {
  return (
    <div className={styles.optionContainer}>
        <img className={styles.imageOption} src="https://images.herzindagi.info/image/2024/Jan/interesting-facts-about-ram-mandir-new-pic.jpg" alt="Ram Mandir" />
    </div>
  )
}

export default ImageOptionCard