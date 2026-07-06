import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";

import Home from "../pages/Home/Home";
import FeaturesPage from "../pages/Features/FeaturesPage";
import Pricing from "../pages/Pricing/Pricing";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";


function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<MainLayout />}>

                <Route index element={<Home />} />

                <Route path="features" element={<FeaturesPage />} />

                <Route path="pricing" element={<Pricing />} />

                <Route path="about" element={<About />} />

                <Route path="contact" element={<Contact />} />



            </Route>

        </Routes>
    );
}

export default AppRoutes;