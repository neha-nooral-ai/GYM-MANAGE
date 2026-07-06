import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);