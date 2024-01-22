import React from 'react'
import styles from './pollcompletion.module.css'

function PollCompletion() {
  return (
    <div className={styles.container}>
        <div className={styles.scoreContainer}>
            <p className={styles.completionMessage}>
                Thank You<br />
                for participating in<br/>
                the poll
            </p>
        </div>
    </div>
  )
}

export default PollCompletion