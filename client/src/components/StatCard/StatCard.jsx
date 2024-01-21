import React from 'react'
import styles from './statcard.module.css'

function StatCard() {
  return (
    <div className={styles.statcard}>
        <div className={styles.statContainer}>
            <p className={styles.countStat}>12</p>
            <p className={styles.countText}>Quiz Created</p>
        </div>
    </div>
  )
}

export default StatCard