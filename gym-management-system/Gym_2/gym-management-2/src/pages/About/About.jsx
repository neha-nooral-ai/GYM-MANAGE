import { motion } from "framer-motion";
import {
    FaUsers,
    FaAward,
    FaChartLine,
    FaShieldAlt
} from "react-icons/fa";

import "./About.css";

function About() {
    const cards = [
        {
            icon: <FaUsers />,
            title: "10,000+ Members",
            desc: "Trusted by gyms across India."
        },
        {
            icon: <FaAward />,
            title: "Professional Software",
            desc: "Built for modern fitness centers."
        },
        {
            icon: <FaChartLine />,
            title: "Business Growth",
            desc: "Powerful reports and analytics."
        },
        {
            icon: <FaShieldAlt />,
            title: "100% Secure",
            desc: "Cloud-based encrypted platform."
        }
    ];

    return (
        <section className="about-page">

            <div className="container">

                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                    <span>ABOUT GYMPRO</span>

                    <h1>

                        Complete Gym
                        <br />
                        Management Platform

                    </h1>

                    <p>

                        GymPro helps gym owners automate
                        memberships, trainers,
                        billing, attendance,
                        notifications and business reports.

                    </p>

                </motion.div>

                <div className="about-grid">

                    {cards.map((card, index) => (

                        <motion.div

                            key={index}

                            className="about-card"

                            initial={{ opacity: 0, y: 40 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            transition={{ delay: index * .1 }}

                            viewport={{ once: true }}

                        >

                            <div className="about-icon">

                                {card.icon}

                            </div>

                            <h3>

                                {card.title}

                            </h3>

                            <p>

                                {card.desc}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default About;