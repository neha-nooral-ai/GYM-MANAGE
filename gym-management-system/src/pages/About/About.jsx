import "./About.css";
import { motion } from "framer-motion";
import {
    FaBullseye,
    FaEye,
    FaUsers,
    FaAward,
    FaChartLine,
    FaDumbbell,
} from "react-icons/fa";

const About = () => {
    return (
        <>
            {/* ================= HERO ================= */}

            <section className="about-hero">

                <div className="overlay"></div>

                <div className="about-container">

                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="section-tag">
                            ABOUT GYMPRO
                        </span>

                        <h1>

                            Transforming Gyms Into

                            <span> Smart Fitness Businesses</span>

                        </h1>

                        <p>

                            GymPro is a premium Gym Management
                            platform built to simplify memberships,
                            attendance, trainers, billing and business
                            analytics for modern fitness centers.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= OUR STORY ================= */}

            <section className="story">

                <div className="about-container story-grid">

                    <motion.div
                        className="story-image"
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >

                        <img
                            src="/images/about-gym.jpg"
                            alt="Gym"
                        />

                    </motion.div>

                    <motion.div
                        className="story-content"
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >

                        <span className="section-tag">

                            OUR STORY

                        </span>

                        <h2>

                            Built For Modern Fitness Centers

                        </h2>

                        <p>

                            Managing a gym shouldn't involve
                            spreadsheets and paperwork.

                            GymPro helps gym owners automate
                            daily operations through one
                            powerful platform.

                        </p>

                        <p>

                            From member registration to online
                            payments and business reports,
                            everything is available in one place.

                        </p>

                    </motion.div>

                </div>

            </section>
            {/* ================= MISSION & VISION ================= */}

            <section className="mission">

                <div className="about-container">

                    <div className="section-heading">

                        <span className="section-tag">
                            OUR PURPOSE
                        </span>

                        <h2>
                            Mission & Vision
                        </h2>

                        <p>
                            We believe every fitness business deserves
                            modern technology that simplifies operations
                            and delivers an exceptional member experience.
                        </p>

                    </div>

                    <div className="mission-grid">

                        <motion.div
                            className="mission-card"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >

                            <div className="mission-icon">
                                <FaBullseye />
                            </div>

                            <h3>Our Mission</h3>

                            <p>
                                To help gyms automate their daily operations,
                                reduce manual work, increase revenue and
                                improve member satisfaction through one
                                intelligent management platform.
                            </p>

                        </motion.div>

                        <motion.div
                            className="mission-card"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                        >

                            <div className="mission-icon">
                                <FaEye />
                            </div>

                            <h3>Our Vision</h3>

                            <p>
                                To become India's most trusted gym
                                management solution by combining
                                technology, automation and innovation
                                into one premium platform.
                            </p>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= WHY GYMPRO ================= */}

            <section className="why-about">

                <div className="about-container">

                    <div className="section-heading">

                        <span className="section-tag">

                            WHY CHOOSE US

                        </span>

                        <h2>

                            Why Gym Owners Choose GymPro

                        </h2>

                    </div>

                    <div className="why-grid">

                        <motion.div
                            className="why-card"
                            whileHover={{ y: -10 }}
                        >

                            <FaUsers className="why-icon" />

                            <h3>Easy Member Management</h3>

                            <p>

                                Add, edit and manage members with
                                just a few clicks.

                            </p>

                        </motion.div>

                        <motion.div
                            className="why-card"
                            whileHover={{ y: -10 }}
                        >

                            <FaChartLine className="why-icon" />

                            <h3>Powerful Analytics</h3>

                            <p>

                                Track attendance, revenue,
                                memberships and growth instantly.

                            </p>

                        </motion.div>

                        <motion.div
                            className="why-card"
                            whileHover={{ y: -10 }}
                        >

                            <FaAward className="why-icon" />

                            <h3>Premium Experience</h3>

                            <p>

                                Beautiful interface with smooth
                                performance across every device.

                            </p>

                        </motion.div>

                        <motion.div
                            className="why-card"
                            whileHover={{ y: -10 }}
                        >

                            <FaDumbbell className="why-icon" />

                            <h3>Built For Fitness Industry</h3>

                            <p>

                                Designed specifically for gyms,
                                fitness clubs and wellness centers.

                            </p>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= ACHIEVEMENTS ================= */}

            <section className="about-stats">

                <div className="about-container">

                    <div className="stats-grid">

                        <div className="stat-box">
                            <h2>500+</h2>
                            <p>Gyms Connected</p>
                        </div>

                        <div className="stat-box">
                            <h2>75K+</h2>
                            <p>Members Managed</p>
                        </div>

                        <div className="stat-box">
                            <h2>99.9%</h2>
                            <p>System Uptime</p>
                        </div>

                        <div className="stat-box">
                            <h2>24/7</h2>
                            <p>Customer Support</p>
                        </div>

                    </div>

                </div>

            </section>
            {/* ================= OUR JOURNEY ================= */}

            <section className="journey">

                <div className="about-container">

                    <div className="section-heading">

                        <span className="section-tag">
                            OUR JOURNEY
                        </span>

                        <h2>
                            Our Growth Journey
                        </h2>

                        <p>
                            Every milestone reflects our commitment to helping
                            fitness businesses become smarter and more successful.
                        </p>

                    </div>

                    <div className="timeline">

                        <div className="timeline-item">

                            <div className="timeline-year">

                                2022

                            </div>

                            <div className="timeline-content">

                                <h3>Idea Started</h3>

                                <p>
                                    We identified the challenges gym owners faced in
                                    managing memberships, attendance and billing.
                                </p>

                            </div>

                        </div>

                        <div className="timeline-item">

                            <div className="timeline-year">

                                2023

                            </div>

                            <div className="timeline-content">

                                <h3>Platform Development</h3>

                                <p>
                                    Built the first cloud-based version with attendance,
                                    member and trainer management.
                                </p>

                            </div>

                        </div>

                        <div className="timeline-item">

                            <div className="timeline-year">

                                2024

                            </div>

                            <div className="timeline-content">

                                <h3>Business Expansion</h3>

                                <p>
                                    Added online payments, analytics dashboards,
                                    reports and notifications.
                                </p>

                            </div>

                        </div>

                        <div className="timeline-item">

                            <div className="timeline-year">

                                2025

                            </div>

                            <div className="timeline-content">

                                <h3>Growing Across India</h3>

                                <p>
                                    Hundreds of gyms trust GymPro to manage their
                                    daily operations efficiently.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= OUR TEAM ================= */}

            <section className="team">

                <div className="about-container">

                    <div className="section-heading">

                        <span className="section-tag">

                            OUR TEAM

                        </span>

                        <h2>

                            Meet Our Fitness Experts

                        </h2>

                    </div>

                    <div className="team-grid">

                        <div className="team-card">

                            <img
                                src="/images/trainer1.jpg"
                                alt="Trainer"
                            />

                            <h3>Rahul Sharma</h3>

                            <span>Head Fitness Coach</span>

                        </div>

                        <div className="team-card">

                            <img
                                src="/images/trainer2.jpg"
                                alt="Trainer"
                            />

                            <h3>Priya Verma</h3>

                            <span>Yoga Expert</span>

                        </div>

                        <div className="team-card">

                            <img
                                src="/images/trainer3.jpg"
                                alt="Trainer"
                            />

                            <h3>Amit Patil</h3>

                            <span>Strength Coach</span>

                        </div>

                        <div className="team-card">

                            <img
                                src="/images/trainer4.jpg"
                                alt="Trainer"
                            />

                            <h3>Sneha Joshi</h3>

                            <span>Nutrition Coach</span>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="about-cta">

                <div className="about-container">

                    <h2>

                        Ready To Transform Your Gym?

                    </h2>

                    <p>

                        Join hundreds of successful fitness centers
                        using GymPro every day.

                    </p>

                    <button>

                        Book Free Demo

                    </button>

                </div>

            </section>

        </>
    );

};

export default About;