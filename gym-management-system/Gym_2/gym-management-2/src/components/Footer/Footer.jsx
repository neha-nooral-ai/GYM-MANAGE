import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-grid">

                    {/* Company */}

                    <div className="footer-col">

                        <Link to="/" className="footer-logo">

                            Gym<span>Pro</span>

                        </Link>

                        <p>

                            Smart Gym Management Software that helps
                            manage members, trainers, billing,
                            attendance and business analytics from
                            one powerful dashboard.

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

                                <FaTwitter />

                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div className="footer-col">

                        <h3>Quick Links</h3>

                        <Link to="/">Home</Link>

                        <Link to="/about">About</Link>

                        <Link to="/features">Features</Link>

                        <Link to="/pricing">Pricing</Link>

                        <Link to="/contact">Contact</Link>

                    </div>

                    {/* Services */}

                    <div className="footer-col">

                        <h3>Modules</h3>

                        <a href="#">Member Management</a>

                        <a href="#">Trainer Management</a>

                        <a href="#">Attendance</a>

                        <a href="#">Billing</a>

                        <a href="#">Reports</a>

                    </div>

                    {/* Contact */}

                    <div className="footer-col">

                        <h3>Contact</h3>

                        <div className="footer-contact">

                            <FaPhoneAlt />

                            <span>+91 9876543210</span>

                        </div>

                        <div className="footer-contact">

                            <FaEnvelope />

                            <span>support@gympro.com</span>

                        </div>

                        <div className="footer-contact">

                            <FaMapMarkerAlt />

                            <span>Aurangabad, Maharashtra</span>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>

                        © 2026 GymPro. All Rights Reserved.

                    </p>

                </div>

            </div>

        </footer>

    )

}

export default Footer;