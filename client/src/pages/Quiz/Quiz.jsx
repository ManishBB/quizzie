import React from 'react'
import styles from './quiz.module.css'
import TextOptionCard from '../../components/TextOptionCard/TextOptionCard'
import ImageOptionCard from '../../components/ImageOptionCard/ImageOptionCard'
import TextImageOptionCard from '../../components/TextImageOptionCard/TextImageOptionCard'

function Quiz() {
  return (
    <div className={styles.container}>
        <div className={styles.quizContainer}>
            <div className={styles.metadataContainer}>
                <span className={styles.questionNumber}>01/05</span>
                <span className={styles.timer}>00:10s</span>
            </div>
            <div className={styles.questionDiv}>
                <p className={styles.question}>To be or not to be? That is the question?</p>
                <div className={styles.optionsDiv}>
                    <TextImageOptionCard />
                    <TextImageOptionCard />
                    <TextImageOptionCard />
                    <TextImageOptionCard />
                </div>
            </div>
            <button className={styles.button}>Next</button>
        </div>
    </div>
  )
}

export default Quiz