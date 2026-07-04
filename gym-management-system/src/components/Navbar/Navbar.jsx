import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`navbar ${scroll ? "navbar-scroll" : ""}`}
        >
            <div className="container">

                <Link to="/" className="logo">
                    <span>GYM</span>PRO
                </Link>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                    <li>
                        <NavLink to="/" onClick={closeMenu}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/features" onClick={closeMenu}>
                            Features
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/pricing" onClick={closeMenu}>
                            Pricing
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" onClick={closeMenu}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/demo" onClick={closeMenu}>
                            Book Demo
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/enquiry" onClick={closeMenu}>
                            Enquiry
                        </NavLink>
                    </li>

                </ul>

                <Link to="/demo" className="demo-btn">
                    Get Started
                </Link>

                <div
                    className="mobile-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>
        </motion.nav>
    );
};

export default Navbar;