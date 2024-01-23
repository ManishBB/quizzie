import React from 'react'
import styles from './sharemodal.module.css';

function ShareModal() {
  return (
    <div className={styles.deleteWarningModal}>
      <div className={styles.modalContainer}>
        <p className={styles.modalText}>Are you confirm you want to delete?</p>
        <div className={styles.modalButtonsDiv}>
            <button className={styles.modalButton} style={{backgroundColor: '#FF4B4B', color: '#FFF'}}>Confirm Delete</button>
            <button className={styles.modalButton}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ShareModal