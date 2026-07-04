import "./Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaArrowRight
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Column 1 */}

                <div className="footer-column company">

                    <h2>

                        Gym<span>Pro</span>

                    </h2>

                    <p>

                        Premium Gym Management Software
                        designed to automate operations,
                        improve member experience and
                        increase business growth.

                    </p>

                    <div className="social-icons">

                        <a href="#">
                            <FaFacebookF />
                        </a>

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaLinkedinIn />
                        </a>

                        <a href="#">
                            <FaYoutube />
                        </a>

                    </div>

                </div>

                {/* Column 2 */}

                <div className="footer-column">

                    <h3>

                        Quick Links

                    </h3>

                    <Link to="/">
                        <FaArrowRight /> Home
                    </Link>

                    <Link to="/about">
                        <FaArrowRight /> About
                    </Link>

                    <Link to="/features">
                        <FaArrowRight /> Features
                    </Link>

                    <Link to="/pricing">
                        <FaArrowRight /> Pricing
                    </Link>

                    <Link to="/contact">
                        <FaArrowRight /> Contact
                    </Link>

                </div>
                {/* Column 3 */}

                <div className="footer-column">

                    <h3>

                        Services

                    </h3>

                    <a href="#">
                        Member Management
                    </a>

                    <a href="#">
                        Attendance Tracking
                    </a>

                    <a href="#">
                        Billing System
                    </a>

                    <a href="#">
                        Reports & Analytics
                    </a>

                    <a href="#">
                        Trainer Management
                    </a>

                </div>

                {/* Column 4 */}

                <div className="footer-column">

                    <h3>

                        Contact

                    </h3>

                    <p>

                        📍 Aurangabad,
                        Maharashtra,
                        India

                    </p>

                    <p>

                        📞 +91 9876543210

                    </p>

                    <p>

                        ✉ info@gympro.com

                    </p>

                    <p>

                        Mon - Sat : 8 AM - 8 PM

                    </p>

                </div>

            </div>

            <div className="footer-bottom">

                © 2026 GymPro.
                All Rights Reserved.

            </div>

        </footer>
    );
};

export default Footer;