import axios from "axios";
import conf from "../config/config";

export const getUserQuizStats = async () => {
    const accessToken = localStorage.getItem("accessToken");

    try {
        const response = await axios.get(
            `${conf.baseUrl}/quiz/dashboard-stats`,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(accessToken)}`,
                },
            }
        );
        console.log("after call");
        return response.data;
    } catch (error) {
        alert("Something went wrong while fetching quiz stats!");
    }
};

export const getUserTrendingQuizzes = async (email) => {
    const accessToken = localStorage.getItem("accessToken");

    try {
        const response = await axios.get(
            `${conf.baseUrl}/quiz/trending-quizzes`,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(accessToken)}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        alert("Something went wrong while fetching trending quizzes!");
    }
};

export const getUserCreatedQuizzes = async (email) => {
    const accessToken = localStorage.getItem("accessToken");

    try {
        const response = await axios.get(
            `${conf.baseUrl}/quiz/get-all-quizzes`,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(accessToken)}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        alert("Something went wrong while fetching created quizzes!");
    }
};
