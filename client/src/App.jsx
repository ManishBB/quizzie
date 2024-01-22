import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import QnACompletion from './pages/QnACompletion/QnACompletion'
import PollCompletion from './pages/PollCompletion/PollCompletion'
import NotFound from './pages/NotFound'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthPage />
    </>
  )
}

export default App
