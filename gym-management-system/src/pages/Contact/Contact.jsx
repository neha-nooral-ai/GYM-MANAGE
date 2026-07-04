import "./Contact.css";
import { motion } from "framer-motion";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock
} from "react-icons/fa";

const Contact = () => {

    return (

        <>

            {/* ================= HERO ================= */}

            <section className="contact-hero">

                <div className="overlay"></div>

                <div className="contact-container">

                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <span className="section-tag">

                            CONTACT US

                        </span>

                        <h1>

                            Let's Build Your

                            <span> Dream Gym</span>

                        </h1>

                        <p>

                            We'd love to hear from you.
                            Contact us for a free demo,
                            pricing or any questions.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= CONTACT INFO ================= */}

            <section className="contact-info">

                <div className="contact-container">

                    <div className="info-grid">

                        <div className="info-card">

                            <FaPhoneAlt />

                            <h3>

                                Call Us

                            </h3>

                            <p>

                                +91 98765 43210

                            </p>

                        </div>

                        <div className="info-card">

                            <FaEnvelope />

                            <h3>

                                Email

                            </h3>

                            <p>

                                info@gympro.com

                            </p>

                        </div>

                        <div className="info-card">

                            <FaMapMarkerAlt />

                            <h3>

                                Address

                            </h3>

                            <p>

                                Aurangabad,
                                Maharashtra,
                                India

                            </p>

                        </div>

                        <div className="info-card">

                            <FaClock />

                            <h3>

                                Working Hours

                            </h3>

                            <p>

                                Mon - Sat
                                8 AM - 8 PM

                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= CONTACT FORM ================= */}

            <section className="contact-form-section">

                <div className="contact-container form-grid">

                    <div className="form-content">

                        <span className="section-tag">

                            SEND MESSAGE

                        </span>

                        <h2>

                            Get In Touch

                        </h2>

                        <p>

                            Fill out the form and our team
                            will contact you within 24 hours.

                        </p>

                    </div>

                    <form className="contact-form">

                        <input
                            type="text"
                            placeholder="Full Name"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                        />

                        <input
                            type="text"
                            placeholder="Gym Name"
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                        ></textarea>

                        <button>

                            Send Message

                        </button>

                    </form>

                </div>

            </section>
            {/* ================= MAP ================= */}

            <section className="map-section">

                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=Aurangabad,Maharashtra&output=embed"
                    loading="lazy"
                ></iframe>

            </section>

            {/* ================= CTA ================= */}

            <section className="contact-cta">

                <div className="contact-container">

                    <h2>

                        Ready To Grow Your Gym?

                    </h2>

                    <p>

                        Schedule a free demo today and
                        experience GymPro.

                    </p>

                    <button>

                        Book Free Demo

                    </button>

                </div>

            </section>

        </>

    );

};

export default Contact;