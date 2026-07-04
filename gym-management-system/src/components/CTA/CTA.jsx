import "./CTA.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="cta">

            <div className="cta-bg-circle circle-1"></div>
            <div className="cta-bg-circle circle-2"></div>

            <motion.div
                className="cta-content"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
                viewport={{ once: true }}
            >

                <span className="cta-tag">
                    START TODAY
                </span>

                <h2>

                    Ready To Grow Your
                    <span> Fitness Business?</span>

                </h2>

                <p>

                    Join hundreds of successful gyms using our
                    premium Gym Management System to automate
                    operations, increase revenue and improve
                    member experience.

                </p>

                <div className="cta-buttons">

                    <Link
                        to="/contact"
                        className="primary-btn"
                    >

                        Book Free Demo

                        <FaArrowRight />

                    </Link>

                    <Link
                        to="/features"
                        className="secondary-btn"
                    >

                        <FaPlayCircle />

                        Explore Features

                    </Link>

                </div>

            </motion.div>

        </section>
    );
};

export default CTA;