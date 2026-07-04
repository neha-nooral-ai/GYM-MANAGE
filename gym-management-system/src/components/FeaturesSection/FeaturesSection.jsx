import "./FeaturesSection.css";
import { motion } from "framer-motion";

import {
    FaUserFriends,
    FaFingerprint,
    FaCreditCard,
    FaChartBar,
    FaCalendarAlt,
    FaMobileAlt
} from "react-icons/fa";

const features = [

    {
        icon: <FaUserFriends />,
        title: "Member Management",
        desc: "Manage unlimited members, memberships, renewals and complete customer information from one dashboard."
    },

    {
        icon: <FaFingerprint />,
        title: "Attendance Tracking",
        desc: "Track attendance through QR Code, RFID, Fingerprint and Face Recognition."
    },

    {
        icon: <FaCreditCard />,
        title: "Billing & Payments",
        desc: "Generate invoices automatically and receive secure online payments with reminders."
    },

    {
        icon: <FaChartBar />,
        title: "Reports & Analytics",
        desc: "Powerful charts and business insights to improve your gym performance."
    },

    {
        icon: <FaCalendarAlt />,
        title: "Class Scheduling",
        desc: "Schedule yoga, cardio, Zumba and personal training sessions with ease."
    },

    {
        icon: <FaMobileAlt />,
        title: "Mobile Friendly",
        desc: "Manage your gym business from anywhere using desktop, tablet or smartphone."
    }

];

const cardVariant = {

    hidden: {
        opacity: 0,
        y: 60
    },

    visible: (i) => ({

        opacity: 1,

        y: 0,

        transition: {
            duration: .6,
            delay: i * .15
        }

    })

};

const FeaturesSection = () => {

    return (

        <section className="features">

            <div className="section-title">

                <span>

                    FEATURES

                </span>

                <h2>

                    Everything You Need To
                    <span> Manage Your Gym</span>

                </h2>

                <p>

                    Our software provides every essential tool required
                    to automate your fitness business while saving
                    time and increasing revenue.

                </p>

            </div>

            <div className="feature-grid">

                {

                    features.map((item, index) => (

                        <motion.div

                            key={index}

                            className="feature-card"

                            variants={cardVariant}

                            initial="hidden"

                            whileInView="visible"

                            custom={index}

                            viewport={{ once: true }}

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

                            <div className="feature-arrow">

                                →

                            </div>

                        </motion.div>

                    ))

                }

            </div>

        </section>

    )

}

export default FeaturesSection;