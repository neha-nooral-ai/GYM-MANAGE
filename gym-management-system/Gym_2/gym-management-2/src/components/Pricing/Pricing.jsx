import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Pricing.css";

const plans = [
    {
        name: "Starter",
        price: "₹999",
        popular: false,
        features: [
            "100 Members",
            "Attendance Tracking",
            "Billing",
            "Trainer Management",
            "Email Support"
        ]
    },

    {
        name: "Professional",
        price: "₹2499",
        popular: true,
        features: [
            "Unlimited Members",
            "QR Attendance",
            "Advanced Billing",
            "Analytics Dashboard",
            "Trainer Management",
            "WhatsApp Reminder",
            "Priority Support"
        ]
    },

    {
        name: "Enterprise",
        price: "Custom",
        popular: false,
        features: [
            "Unlimited Branches",
            "Cloud Backup",
            "Advanced Reports",
            "API Integration",
            "Dedicated Manager",
            "Custom Branding"
        ]
    }
];

function Pricing() {
    return (
        <section className="pricing">

            <div className="container">

                <div className="pricing-title">

                    <span>PRICING</span>

                    <h2>
                        Flexible Pricing
                        <br />
                        For Every Gym
                    </h2>

                    <p>
                        Choose a plan according to your business size.
                    </p>

                </div>

                <div className="pricing-grid">

                    {plans.map((plan, index) => (

                        <motion.div
                            key={index}
                            className={
                                plan.popular
                                    ? "pricing-card active"
                                    : "pricing-card"
                            }

                            initial={{ opacity: 0, y: 60 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}

                            transition={{
                                duration: .6,
                                delay: index * .15
                            }}

                        >

                            {plan.popular && (

                                <div className="popular">

                                    MOST POPULAR

                                </div>

                            )}

                            <h3>

                                {plan.name}

                            </h3>

                            <h1>

                                {plan.price}

                            </h1>

                            {

                                plan.price !== "Custom" &&

                                <span className="month">

                                    /month

                                </span>

                            }

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

                            <button className="primaryBtn">

                                Get Started

                            </button>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Pricing;