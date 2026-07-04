import "./PricingPreview.css";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaCrown,
    FaFire,
    FaRocket
} from "react-icons/fa";

const plans = [

    {
        name: "Starter",
        price: "₹999",
        month: "/month",
        icon: <FaFire />,
        popular: false,

        features: [
            "Up to 300 Members",
            "Attendance Tracking",
            "Member Management",
            "Trainer Management",
            "Basic Reports",
            "Email Support"
        ]

    },

    {
        name: "Professional",
        price: "₹1999",
        month: "/month",
        icon: <FaCrown />,
        popular: true,

        features: [
            "Unlimited Members",
            "Billing & Payments",
            "Attendance System",
            "Analytics Dashboard",
            "SMS & Email Alerts",
            "Priority Support"
        ]

    },

    {
        name: "Enterprise",
        price: "Custom",
        month: "",
        icon: <FaRocket />,
        popular: false,

        features: [
            "Unlimited Everything",
            "Mobile App",
            "Multiple Branches",
            "Cloud Backup",
            "Dedicated Manager",
            "24x7 Premium Support"
        ]

    }

];

const PricingPreview = () => {

    return (

        <section className="pricing">

            <div className="pricing-title">

                <span>

                    PRICING

                </span>

                <h2>

                    Affordable Plans
                    <span> For Every Gym</span>

                </h2>

                <p>

                    Choose the perfect plan that fits
                    your fitness business.

                </p>

            </div>

            <div className="pricing-grid">

                {

                    plans.map((plan, index) => (

                        <motion.div

                            key={index}

                            className={`price-card ${plan.popular ? "popular" : ""}`}

                            initial={{ opacity: 0, y: 60 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            transition={{ duration: .6, delay: index * .2 }}

                            viewport={{ once: true }}

                        >

                            {
                                plan.popular &&

                                <div className="popular-badge">

                                    Most Popular

                                </div>

                            }

                            <div className="price-icon">

                                {plan.icon}

                            </div>

                            <h3>

                                {plan.name}

                            </h3>

                            <div className="price">

                                {plan.price}

                                <span>

                                    {plan.month}

                                </span>

                            </div>

                            <ul>
                                {

                                    plan.features.map((item, i) => (

                                        <li key={i}>

                                            <FaCheckCircle />

                                            {item}

                                        </li>

                                    ))

                                }

                            </ul>

                            <button>

                                Get Started

                            </button>

                        </motion.div>

                    ))

                }

            </div>

        </section>

    )

}

export default PricingPreview;