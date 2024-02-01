const conf = {
    serverUrl: String(import.meta.env.SERVER_URL),
    baseUrl: "https://quizzie-wjkp.onrender.com/api/v1",
    // baseUrl: "https://peaceful-cranachan-69f7c9.netlify.app/api/v1",
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export default conf;
