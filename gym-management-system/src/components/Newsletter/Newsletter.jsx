import "./Newsletter.css";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

const Newsletter = () => {
    return (
        <section className="newsletter">

            <div className="newsletter-glow glow-1"></div>
            <div className="newsletter-glow glow-2"></div>

            <motion.div
                className="newsletter-container"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
                viewport={{ once: true }}
            >

                <div className="newsletter-left">

                    <span>NEWSLETTER</span>

                    <h2>

                        Stay Updated With
                        <br />

                        <strong>GymPro</strong>

                    </h2>

                    <p>

                        Get fitness industry updates,
                        software improvements,
                        new features and exclusive offers
                        directly in your inbox.

                    </p>

                </div>

                <form className="newsletter-form">

                    <div className="input-box">

                        <FaEnvelope />

                        <input
                            type="email"
                            placeholder="Enter your email address"
                        />

                    </div>

                    <button>

                        Subscribe

                        <FaPaperPlane />

                    </button>

                </form>

            </motion.div>

        </section>
    );
};

export default Newsletter;