import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaChartLine,
    FaUsers,
    FaShieldAlt
} from "react-icons/fa";

import {
    FaArrowTrendUp
} from "react-icons/fa6";

import "./WhyChoose.css";

function WhyChoose() {

    const points = [

        "Complete Member Management",

        "Attendance & QR Check-in",

        "Trainer Scheduling",

        "Membership Billing",

        "Business Analytics",

        "Cloud Based Access"

    ];

    return (

        <section className="why">

            <div className="container why-container">

                {/* LEFT */}

                <motion.div

                    className="why-left"

                    initial={{ opacity: 0, x: -80 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .8 }}

                >

                    <div className="dashboard-box">

                        <div className="dashboard-top">

                            <h3>Business Growth</h3>

                            <FaChartLine />

                        </div>

                        <div className="progress-card">

                            <span>Monthly Growth</span>

                            <h2>82%</h2>

                            <div className="progress">

                                <div className="progress-fill"></div>

                            </div>

                        </div>

                        <div className="small-cards">

                            <div>

                                <FaUsers />

                                <h4>2500+</h4>

                                <span>Members</span>

                            </div>

                            <div>

                                <FaArrowTrendUp />

                                <h4>₹12M</h4>

                                <span>Revenue</span>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* RIGHT */}

                <motion.div

                    className="why-right"

                    initial={{ opacity: 0, x: 80 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .8 }}

                >

                    <span className="section-tag">

                        WHY CHOOSE US

                    </span>

                    <h2>

                        Everything Required To
                        <br />

                        Grow Your Gym Business

                    </h2>

                    <p>

                        Our platform simplifies everyday gym
                        operations using automation, analytics,
                        secure cloud storage and modern technology.

                    </p>

                    <div className="why-list">

                        {

                            points.map((item, index) => (

                                <div
                                    key={index}
                                    className="why-item"
                                >

                                    <FaCheckCircle />

                                    <span>{item}</span>

                                </div>

                            ))

                        }

                    </div>

                    <button className="primaryBtn">

                        Learn More

                    </button>

                </motion.div>

            </div>

        </section>

    )

}

export default WhyChoose;