import React from 'react'
import styles from './qnaoptionimpressioncard.module.css'

function QnaOptionImpressioncard() {
  return (
    <div className={styles.container}>
        <p className={styles.impressionCount}>60</p>
        <p className={styles.impressionData}>people attemped to the questions</p>
    </div>
  )
}

export default QnaOptionImpressioncard