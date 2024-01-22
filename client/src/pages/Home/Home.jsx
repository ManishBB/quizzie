import React from 'react'
import styles from './home.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import Analysis from '../Analysis/Analysis'
import QuestionAnalysis from '../QuestionAnalysis/QuestionAnalysis'

function Home() {
  return (
    <div className={styles.home}>
        <Sidebar />
        <QuestionAnalysis />
    </div>
  )
}

export default Home