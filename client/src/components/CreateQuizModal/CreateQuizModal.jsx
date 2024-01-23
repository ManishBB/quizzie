import React, { useState } from 'react'
import styles from './createquizmodal.module.css';

function CreateQuizModal() {
    
    const [quizTitleModal, setQuizTitleModal] = useState(false)
    const [addQuestionsModal, setAddQuestionsModal] = useState(false)
    const [quizCreatedModal, setQuizCreatedModal] = useState(true)

    const [quizName, setQuizName] = useState("")
    const [quizType, setQuizType] = useState("")
    

  return (
    <div className={styles.createQuizModal}>
        
        {quizTitleModal && (
            <div className={styles.quizTitleModalContainer}>
                <input className={styles.quizNameInput} type="text" name="quizName" id="quizName" placeholder='Quiz Name'/>
                <div className={styles.quizTypeDiv}>
                    <p className={styles.quizTypeText}>Quiz Type</p>
                    <button className={styles.quizTypeButton}>Q & A</button>
                    <button className={styles.quizTypeButton}>Poll Type</button>
                </div>
                <div className={styles.buttonsDiv}>
                    <button className={styles.modalButton}>Cancel</button>
                    <button className={styles.modalButton} style={{backgroundColor: '#60B84B', color: '#FFF'}}>Continue</button>
                </div>
            </div>
        )}

        {addQuestionsModal && (
            <div className={styles.modalContainer}>
                <p className={styles.modalText}>Are you confirm you want to delete?</p>
                <div className={styles.modalButtonsDiv}>
                    <button className={styles.modalButton} style={{backgroundColor: '#FF4B4B', color: '#FFF'}}>Confirm Delete</button>
                    <button className={styles.modalButton}>Cancel</button>
                </div>
            </div>
        )}

        {quizCreatedModal && (
            <div className={styles.quizCreatedContainer}>
                <p className={styles.quizCreatedText}>Congrats your Quiz is Published!</p>
                <div className={styles.quizLinkDiv}>
                    <p className={styles.quizLink}>Quiz Type</p>
                </div>
                <div className={styles.buttonsDiv}>
                    <button className={styles.shareButton} style={{backgroundColor: '#60B84B', color: '#FFF'}}>Share</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default CreateQuizModal