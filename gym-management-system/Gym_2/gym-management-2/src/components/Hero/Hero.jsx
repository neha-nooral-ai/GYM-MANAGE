import { motion } from "framer-motion";
import DashboardPreview from "../DashboardPreview/DashboardPreview";
import HeroStats from "../HeroStats/HeroStats";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-overlay"></div>

            <div className="container hero-container">

                {/* LEFT */}

                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <span className="hero-badge">
                        Smart Gym Management Software
                    </span>

                    <h1>

                        Build A

                        <span>

                            Modern Fitness

                        </span>

                        Business

                    </h1>

                    <p>

                        Manage Members, Trainers,
                        Attendance, Payments,
                        Reports and Analytics from
                        one beautiful dashboard.

                    </p>

                    <div className="hero-buttons">

                        <button className="primaryBtn">

                            Start Free Trial

                        </button>

                        <button className="secondaryBtn">

                            Watch Demo

                        </button>

                    </div>

                    <HeroStats />

                </motion.div>

                {/* RIGHT */}

                <motion.div

                    className="hero-right"

                    initial={{ opacity: 0, x: 80 }}

                    animate={{ opacity: 1, x: 0 }}

                    transition={{ duration: 1 }}

                >

                    <DashboardPreview />

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;