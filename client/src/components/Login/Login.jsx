import React, { useState } from "react";
import styles from "./login.module.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <button className={styles.loginButton} type="submit">Log In</button>
    </form>
  );
}

export default Login;
