import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const testRoute = async () => {
    try {
        axios
            .get(`${BASE_URL}/quiz/get-quiz/65aa646261fac643a8cfa6c0`)
            .then((response) => {
                return response.data;
            });
    } catch (error) {
        throw new Error("Failed to fetch quiz");
    }
};

export const createQuiz = async (quizData) => {
    try {
        const response = await axios.post("/api/quiz", quizData);
        return response.data;
    } catch (error) {
        throw new Error("Failed to create quiz");
    }
};

const getAccessTokenFromCookies = () => {
    // Implement your logic to retrieve the access token from cookies
    // and return it here
};

export const getUser = (userId) => {
    return axios.get(`${BASE_URL}/users/${userId}`);
};

export const createUser = (userData) => {
    return axios.post(`${BASE_URL}/users`, userData);
};

// Add more API call functions as needed
