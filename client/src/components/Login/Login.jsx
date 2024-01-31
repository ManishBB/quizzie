import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { login } from "../../store/authSlice";
import conf from "../../config/config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle signup logic here...

        if (!conf.emailRegex.test(email)) {
            alert("Please enter your email address correctly!");
            return;
        }

        try {
            const response = await axios.post(
                `${conf.baseUrl}/user/login-user`,
                {
                    email,
                    password,
                }
            );
            const { data } = response.data;

            console.log(response.data.accessToken);

            // Dispatch action to store user data in Redux
            dispatch(login(response.data.loggedInUser));

            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem(
                "userData",
                JSON.stringify(response.data.loggedInUser)
            );
            localStorage.setItem(
                "accessToken",
                JSON.stringify(response.data.accessToken)
            );

            navigate("/");

            // Clear form
            setEmail("");
            setPassword("");
        } catch (error) {
            alert(
                "Email or password is incorrect! Please enter correct credentials..."
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className={styles.loginButton} type="submit">
                Log In
            </button>
        </form>
    );
}

export default Login;
