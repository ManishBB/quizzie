import React from 'react'
import styles from './questionanalysis.module.css'
import QnaOptionImpressioncard from '../../components/QnAOptionImpressionCard/QnaOptionImpressioncard'
import PollOptionImpressionCard from '../../components/PollOptionImpressionCard/PollOptionImpressionCard'

function QuestionAnalysis() {
  return (
    <div className={styles.container}>
        <p className={styles.metadataContainer}>
          Created on : 04 Sep, 2023
          <br />
          Impressions : 667
        </p>

        <div className={styles.wrapper}>        
            <p className={styles.heading}>Quiz 2 Question Analysis</p>

            <div className={styles.questionContainer}>
                <p className={styles.question}>Q.1 Question place holder for analysis ?</p>
                <div className={styles.optionsTab}>
                    <QnaOptionImpressioncard/>
                    <QnaOptionImpressioncard/>
                    <QnaOptionImpressioncard/>
                </div>
                <hr className={styles.horizontalDivider} />
            </div>
            <div className={styles.questionContainer}>
                <p className={styles.question}>Q.1 Question place holder for analysis ?</p>
                <div className={styles.optionsTab}>
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                </div>
                <hr className={styles.horizontalDivider} />
            </div>
            <div className={styles.questionContainer}>
                <p className={styles.question}>Q.1 Question place holder for analysis ?</p>
                <div className={styles.optionsTab}>
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                </div>
                <hr className={styles.horizontalDivider} />
            </div>
            <div className={styles.questionContainer}>
                <p className={styles.question}>Q.1 Question place holder for analysis ?</p>
                <div className={styles.optionsTab}>
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                </div>
                <hr className={styles.horizontalDivider} />
            </div>
            <div className={styles.questionContainer}>
                <p className={styles.question}>Q.1 Question place holder for analysis ?</p>
                <div className={styles.optionsTab}>
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                    <PollOptionImpressionCard />
                </div>
                <hr className={styles.horizontalDivider} />
            </div>
        </div>
    </div>
  )
}

export default QuestionAnalysis