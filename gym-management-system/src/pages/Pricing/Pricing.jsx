import "./Pricing.css";
import { motion } from "framer-motion";
import { FaCheck, FaStar } from "react-icons/fa";

const plans = [
    {
        name: "Starter",
        price: "₹999",
        period: "/month",
        popular: false,
        features: [
            "Up to 100 Members",
            "Attendance Tracking",
            "Member Management",
            "Basic Reports",
            "Email Support",
        ],
    },
    {
        name: "Professional",
        price: "₹2,499",
        period: "/month",
        popular: true,
        features: [
            "Unlimited Members",
            "Trainer Management",
            "Billing & Payments",
            "Advanced Reports",
            "WhatsApp Notifications",
            "Priority Support",
        ],
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        popular: false,
        features: [
            "Multiple Branches",
            "Dedicated Manager",
            "Custom Integrations",
            "Cloud Backup",
            "Premium Support",
            "Custom Features",
        ],
    },
];

const Pricing = () => {
    return (
        <>
            {/* ================= HERO ================= */}

            <section className="pricing-hero">

                <div className="overlay"></div>

                <div className="pricing-container">

                    <motion.div
                        className="pricing-hero-content"
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <span className="section-tag">

                            PRICING

                        </span>

                        <h1>

                            Choose The Perfect

                            <span> Plan For Your Gym</span>

                        </h1>

                        <p>

                            Affordable pricing for gyms of every size.
                            Upgrade anytime as your business grows.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= PLANS ================= */}

            <section className="pricing-section">

                <div className="pricing-container">

                    <div className="pricing-grid">
                        {plans.map((plan, index) => (

                            <motion.div

                                className={`price-card ${plan.popular ? "popular" : ""}`}

                                key={index}

                                whileHover={{ y: -10 }}

                            >

                                {plan.popular && (

                                    <div className="popular-badge">

                                        <FaStar />

                                        Most Popular

                                    </div>

                                )}

                                <h3>{plan.name}</h3>

                                <h2>

                                    {plan.price}

                                    <span>{plan.period}</span>

                                </h2>

                                <ul>

                                    {plan.features.map((item, i) => (

                                        <li key={i}>

                                            <FaCheck />

                                            {item}

                                        </li>

                                    ))}

                                </ul>

                                <button>

                                    Get Started

                                </button>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= BILLING TOGGLE ================= */}

            <section className="billing-section">

                <div className="pricing-container">

                    <div className="section-heading">

                        <span className="section-tag">

                            FLEXIBLE BILLING

                        </span>

                        <h2>

                            Monthly Or Yearly

                        </h2>

                        <p>

                            Choose the billing cycle that best fits your business.

                        </p>

                    </div>

                    <div className="billing-toggle">

                        <button className="active">

                            Monthly

                        </button>

                        <button>

                            Yearly
                            <span> Save 20%</span>

                        </button>

                    </div>

                </div>

            </section>

            {/* ================= COMPARISON ================= */}

            <section className="comparison">

                <div className="pricing-container">

                    <div className="section-heading">

                        <span className="section-tag">

                            COMPARE PLANS

                        </span>

                        <h2>

                            Feature Comparison

                        </h2>

                    </div>

                    <div className="comparison-table">

                        <table>

                            <thead>

                                <tr>

                                    <th>Feature</th>

                                    <th>Starter</th>

                                    <th>Professional</th>

                                    <th>Enterprise</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Members</td>

                                    <td>100</td>

                                    <td>Unlimited</td>

                                    <td>Unlimited</td>

                                </tr>

                                <tr>

                                    <td>Attendance</td>

                                    <td>✔</td>

                                    <td>✔</td>

                                    <td>✔</td>

                                </tr>

                                <tr>

                                    <td>Trainer Management</td>

                                    <td>—</td>

                                    <td>✔</td>

                                    <td>✔</td>

                                </tr>

                                <tr>

                                    <td>Reports</td>

                                    <td>Basic</td>

                                    <td>Advanced</td>

                                    <td>Premium</td>

                                </tr>

                                <tr>

                                    <td>Support</td>

                                    <td>Email</td>

                                    <td>Priority</td>

                                    <td>Dedicated</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>


            {/* ================= FAQ ================= */}

            <section className="pricing-faq">

                <div className="pricing-container">

                    <div className="section-heading">

                        <span className="section-tag">

                            QUESTIONS

                        </span>

                        <h2>

                            Frequently Asked Questions

                        </h2>

                    </div>

                    <div className="faq-list">

                        <div className="faq-card">

                            <h3>

                                Can I upgrade my plan later?

                            </h3>

                            <p>

                                Yes. You can upgrade or downgrade
                                your subscription anytime.

                            </p>

                        </div>

                        <div className="faq-card">

                            <h3>

                                Is there a free trial?

                            </h3>

                            <p>

                                Yes, we offer a free demo and trial
                                before purchasing.

                            </p>

                        </div>

                        <div className="faq-card">

                            <h3>

                                Is my data secure?

                            </h3>

                            <p>

                                Absolutely. We use encrypted cloud
                                storage with daily backups.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="pricing-cta">

                <div className="pricing-container">

                    <h2>

                        Ready To Grow Your Gym?

                    </h2>

                    <p>

                        Start using GymPro today and simplify your
                        entire gym management.

                    </p>

                    <button>

                        Start Free Demo

                    </button>

                </div>

            </section>
        </>
    );
};

export default Pricing;