import React from 'react'
import styles from './home.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'

function Home() {
  return (
    <div className={styles.home}>
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default Home