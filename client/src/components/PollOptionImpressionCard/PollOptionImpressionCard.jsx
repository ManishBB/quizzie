import React from 'react'
import styles from './polloptionimpressioncard.module.css'

function PollOptionImpressionCard() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <p className={styles.impressionCount}>60</p>
            <p className={styles.impressionData}>Option 1</p>
        </div>
    </div>
  )
}

export default PollOptionImpressionCard