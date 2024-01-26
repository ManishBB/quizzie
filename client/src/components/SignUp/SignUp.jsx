import React, { useState } from "react";
import styles from "./signup.module.css";
import conf from "../../config/config";
import axios from "axios";
import { useDispatch } from "react-redux";

function SignUp({ setIsSignup }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle signup logic here...

        if (!name) {
            alert("Please enter your name!");
            return;
        }

        if (!conf.emailRegex.test(email)) {
            alert("Please enter your email address correctly!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password does not match!");
            return;
        }

        try {
            const response = await axios.post(
                `${conf.baseUrl}/user/register-user`,
                {
                    name,
                    email,
                    password,
                }
            );
            const { data } = response.data;

            console.log(data);

            setIsSignup(false);

            // Clear form
            setEmail("");
            setPassword("");
        } catch (error) {
            alert("Something went wrong!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputDiv}>
                <label className={styles.formLabel}>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.formLabel}>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.formLabel}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.formLabel}>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button className={styles.signupButton} type="submit">
                Sign Up
            </button>
        </form>
    );
}

export default SignUp;
