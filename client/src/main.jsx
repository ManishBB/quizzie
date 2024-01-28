import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store.js";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Home from "./pages/Home/Home.jsx";
import QuizLayout from "./pages/QuizLayout/QuizLayout.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import { login } from "./store/authSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);
