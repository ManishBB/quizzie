import React, { useState } from 'react'
import styles from './authpage.module.css'
import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';

function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <p>QUIZZIE</p>
        </div>
        <div className={styles.tabButtons}>
          <button onClick={handleSignupClick}>Signup</button>
          <button onClick={handleLoginClick}>Login</button>
        </div>
        <div className={styles.formContainer}>
          {isSignup ? <SignUp /> : <Login />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;