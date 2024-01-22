import React, { useState } from 'react'
import styles from './signup.module.css'

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here...
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputDiv}>
        <label className={styles.formLabel}>Name</label>
        <input type="email" value={password} onChange={handlePasswordChange} />
      </div>
      <div className={styles.inputDiv}>
        <label className={styles.formLabel}>Email</label>
        <input type="email" value={password} onChange={handlePasswordChange} />
      </div>
      <div className={styles.inputDiv}>
        <label className={styles.formLabel}>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className={styles.inputDiv}>
        <label className={styles.formLabel}>Confirm Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className={styles.signupButton} type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp