import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Features from "../pages/Features/Features";
import Pricing from "../pages/Pricing/Pricing";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
    );
}

export default AppRoutes;