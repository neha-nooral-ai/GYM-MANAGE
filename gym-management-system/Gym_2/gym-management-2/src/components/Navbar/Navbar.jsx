import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 60) {

                setScrolled(true);

            } else {

                setScrolled(false);

            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const closeMenu = () => {

        setMenuOpen(false);

    };

    return (

        <header className={scrolled ? "navbar active" : "navbar"}>

            <div className="container navbar-container">

                {/* Logo */}

                <Link
                    to="/"
                    className="logo"
                    onClick={closeMenu}
                >

                    Gym<span>Pro</span>

                </Link>

                {/* Navigation */}

                <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

                    <Link to="/" onClick={closeMenu}>
                        Home
                    </Link>

                    <Link to="/about" onClick={closeMenu}>
                        About
                    </Link>

                    <Link to="/features" onClick={closeMenu}>
                        Features
                    </Link>

                    <Link to="/pricing" onClick={closeMenu}>
                        Pricing
                    </Link>

                    <Link to="/contact" onClick={closeMenu}>
                        Contact
                    </Link>

                </nav>

                {/* Right Button */}

                <Link
                    to="/contact"
                    className="demo-btn"
                >

                    Book Demo

                </Link>

                {/* Mobile Menu */}

                <div
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {

                        menuOpen ?

                            <FaTimes />

                            :

                            <FaBars />

                    }

                </div>

            </div>

        </header>

    );

}

export default Navbar;