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

export const getQuizImpressionAnalysis = async (quizId) => {
    try {
        const response = await axios.get(
            `${conf.baseUrl}/quiz/get-quiz/${quizId}`
        );

        return response.data;
    } catch (error) {
        alert("Something went wrong while fetching quiz stats!");
    }
};

export const getQuiz = async (quizId) => {
    try {
        const response = await axios.get(
            `${conf.baseUrl}/quiz/get-quiz/${quizId}`
        );

        return response.data;
    } catch (error) {
        const response =
            "Your quiz link might be broken! Please come up with a new link...";
        return response;
    }
};

export const deleteQuiz = async (quizId) => {
    const accessToken = localStorage.getItem("accessToken");

    try {
        const response = await axios.delete(
            `${conf.baseUrl}/quiz/delete-quiz/${quizId}`,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(accessToken)}`,
                },
            }
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        alert("Something went wrong while fetching quiz stats!");
    }
};
