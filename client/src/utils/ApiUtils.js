import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "http://localhost:8000/api/v1";

export const getQuizStats = async () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);

    try {
        const response = await axios.get(
            `${conf.baseUrl}/quiz/dashboard-stats`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        const { data } = response.data;

        console.log(data);

        // Dispatch action to store user data in Redux
        dispatch(getQuizStats({ data }));
    } catch (error) {
        alert("Something went wrong while fetching quiz stats!");
    }
};

const getTrendingQuizzes = async (email) => {
    const accessToken = localStorage.getItem("accessToken");

    try {
        const response = await axios.post(`${conf.baseUrl}/user/login-user`, {
            email,
            password,
        });
        const { data } = response.data;

        console.log(data);

        // Dispatch action to store user data in Redux
        dispatch(login({ data }));

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
        alert("Something went wrong while fetching trending quizzes!");
    }
};

const getCreatedQuizzes = async (email) => {
    const accessToken = localStorage.getItem("accessToken");

    try {
        const response = await axios.post(`${conf.baseUrl}/user/login-user`, {
            email,
            password,
        });
        const { data } = response.data;

        console.log(data);

        // Dispatch action to store user data in Redux
        dispatch(login({ data }));

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
        alert("Something went wrong while fetching created quizzes!");
    }
};
