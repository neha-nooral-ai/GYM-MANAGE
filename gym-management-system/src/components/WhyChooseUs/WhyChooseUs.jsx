import "./WhyChooseUs.css";
import { motion } from "framer-motion";
import {
    FaRocket,
    FaUsers,
    FaShieldAlt,
    FaChartLine,
    FaMobileAlt,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        icon: <FaRocket />,
        title: "All-in-One Solution",
        description:
            "Manage members, trainers, attendance, billing, reports and notifications from one powerful dashboard.",
    },
    {
        icon: <FaChartLine />,
        title: "Business Growth",
        description:
            "Increase gym productivity using automated billing, reminders and insightful analytics.",
    },
    {
        icon: <FaUsers />,
        title: "Better Member Experience",
        description:
            "Provide seamless check-ins, online memberships and faster communication.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Secure Platform",
        description:
            "Enterprise-grade security with encrypted data, role management and automatic backups.",
    },
    {
        icon: <FaMobileAlt />,
        title: "Mobile Friendly",
        description:
            "Access your gym anytime from desktop, tablet or smartphone with a responsive interface.",
    },
    {
        icon: <FaHeadset />,
        title: "24×7 Support",
        description:
            "Dedicated technical assistance whenever you need help operating your business.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="why-section">

            <div className="why-header">

                <span className="section-tag">
                    WHY CHOOSE US
                </span>

                <h2>
                    Why Choose Our
                    <span> Gym Management Software?</span>
                </h2>

                <p>
                    We provide everything required to automate,
                    manage and grow your fitness business while
                    delivering an exceptional member experience.
                </p>

            </div>

            <div className="why-grid">

                {features.map((item, index) => (

                    <motion.div
                        key={index}
                        className="why-card"
                        initial={{
                            opacity: 0,
                            y: 60,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >

                        <div className="icon-box">

                            {item.icon}

                        </div>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        <span className="card-line"></span>

                    </motion.div>

                ))}

            </div>

        </section>
    );
};

export default WhyChooseUs;