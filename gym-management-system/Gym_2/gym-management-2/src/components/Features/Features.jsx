import {
    FaUsers,
    FaMoneyCheckAlt,
    FaCalendarCheck,
    FaChartLine,
    FaUserTie,
    FaMobileAlt
} from "react-icons/fa";

import { motion } from "framer-motion";

import "./Features.css";

const features = [

    {
        icon: <FaUsers />,
        title: "Member Management",
        desc: "Manage members, memberships, renewals and complete profile information from one place."
    },

    {
        icon: <FaMoneyCheckAlt />,
        title: "Billing & Payments",
        desc: "Generate invoices, collect online payments and monitor pending dues instantly."
    },

    {
        icon: <FaCalendarCheck />,
        title: "Attendance Tracking",
        desc: "QR based attendance with daily check-ins and complete attendance history."
    },

    {
        icon: <FaUserTie />,
        title: "Trainer Management",
        desc: "Assign trainers, schedules, workout plans and monitor trainer performance."
    },

    {
        icon: <FaChartLine />,
        title: "Business Analytics",
        desc: "Revenue charts, member growth, attendance reports and performance insights."
    },

    {
        icon: <FaMobileAlt />,
        title: "Mobile Friendly",
        desc: "Fully responsive dashboard that works perfectly on desktop, tablet and mobile."
    }

];

function Features() {

    return (

        <section className="features">

            <div className="container">

                <div className="section-title">

                    <span>OUR FEATURES</span>

                    <h2>

                        Everything You Need To
                        <br />
                        Run Your Gym Efficiently

                    </h2>

                    <p>

                        Powerful tools designed for gym owners,
                        trainers and administrators.

                    </p>

                </div>

                <div className="features-grid">

                    {

                        features.map((item, index) => (

                            <motion.div

                                key={index}

                                className="feature-card"

                                initial={{ opacity: 0, y: 60 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{
                                    duration: .6,
                                    delay: index * .1
                                }}

                            >

                                <div className="feature-icon">

                                    {item.icon}

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                                <p>

                                    {item.desc}

                                </p>

                            </motion.div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default Features;