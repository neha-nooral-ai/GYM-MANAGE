import "./Features.css";
import { motion } from "framer-motion";
import {
    FaUsers,
    FaUserCheck,
    FaCreditCard,
    FaChartBar,
    FaDumbbell,
    FaBell
} from "react-icons/fa";

const features = [
    {
        icon: <FaUsers />,
        title: "Member Management",
        description:
            "Register, update and manage all members from one dashboard with complete profile details."
    },
    {
        icon: <FaUserCheck />,
        title: "Attendance Tracking",
        description:
            "Monitor daily attendance using QR Code, RFID or biometric devices with real-time reports."
    },
    {
        icon: <FaCreditCard />,
        title: "Billing & Payments",
        description:
            "Generate invoices, collect payments and track pending memberships automatically."
    },
    {
        icon: <FaChartBar />,
        title: "Reports & Analytics",
        description:
            "View revenue, attendance, membership growth and performance through interactive dashboards."
    },
    {
        icon: <FaDumbbell />,
        title: "Trainer Management",
        description:
            "Manage trainers, schedules, assigned batches and performance from one place."
    },
    {
        icon: <FaBell />,
        title: "Notifications",
        description:
            "Send reminders for membership renewals, offers and announcements through SMS and Email."
    }
];

const Features = () => {

    return (

        <>
            {/* ================= HERO ================= */}

            <section className="features-hero">

                <div className="overlay"></div>

                <div className="features-container">

                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <span className="section-tag">

                            FEATURES

                        </span>

                        <h1>

                            Everything You Need To

                            <span> Manage Your Gym</span>

                        </h1>

                        <p>

                            GymPro offers powerful tools to automate
                            memberships, attendance, billing,
                            trainers and business analytics.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= FEATURES GRID ================= */}

            <section className="features-section">

                <div className="features-container">

                    <div className="section-heading">

                        <span className="section-tag">

                            OUR FEATURES

                        </span>

                        <h2>

                            Powerful Features For Modern Gyms

                        </h2>

                    </div>

                    <div className="features-grid">
                        {

                            features.map((item, index) => (

                                <motion.div

                                    className="feature-card"

                                    key={index}

                                    initial={{ opacity: 0, y: 50 }}

                                    whileInView={{ opacity: 1, y: 0 }}

                                    transition={{ duration: .5, delay: index * .1 }}

                                    viewport={{ once: true }}

                                >

                                    <div className="feature-icon">

                                        {item.icon}

                                    </div>

                                    <h3>

                                        {item.title}

                                    </h3>

                                    <p>

                                        {item.description}

                                    </p>


                                    {/* ================= FEATURE SHOWCASE ================= */}

                                    <section className="feature-showcase">

                                        <div className="features-container showcase-grid">

                                            <motion.div
                                                className="showcase-image"
                                                initial={{ x: -60, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                            >

                                                <img
                                                    src="/images/dashboard-preview.png"
                                                    alt="Dashboard"
                                                />

                                            </motion.div>

                                            <motion.div
                                                className="showcase-content"
                                                initial={{ x: 60, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                            >

                                                <span className="section-tag">

                                                    SMART DASHBOARD

                                                </span>

                                                <h2>

                                                    Control Your Entire Gym
                                                    From One Dashboard

                                                </h2>

                                                <p>

                                                    Monitor memberships, trainers,
                                                    attendance, payments and reports
                                                    from a single beautiful dashboard.

                                                </p>

                                                <ul>

                                                    <li>✔ Member Management</li>

                                                    <li>✔ Attendance Tracking</li>

                                                    <li>✔ Payment Reports</li>

                                                    <li>✔ Revenue Analytics</li>

                                                    <li>✔ Trainer Scheduling</li>

                                                </ul>

                                            </motion.div>

                                        </div>

                                    </section>
                                    {/* ================= MOBILE APP ================= */}

                                    <section className="mobile-section">

                                        <div className="features-container mobile-grid">

                                            <div className="mobile-content">

                                                <span className="section-tag">

                                                    MOBILE EXPERIENCE

                                                </span>

                                                <h2>

                                                    Manage Your Gym
                                                    Anytime Anywhere

                                                </h2>

                                                <p>

                                                    Responsive design allows gym owners
                                                    to monitor operations using mobile,
                                                    tablet or desktop.

                                                </p>

                                                <div className="mobile-list">

                                                    <div>📱 Mobile Friendly</div>

                                                    <div>⚡ Fast Performance</div>

                                                    <div>🔒 Secure Login</div>

                                                    <div>☁ Cloud Based</div>

                                                </div>

                                            </div>

                                            <div className="mobile-image">

                                                <img
                                                    src="/images/mobile-app.png"
                                                    alt="Mobile App"
                                                />

                                            </div>

                                        </div>

                                    </section>
                                </motion.div>

                            ))

                        }

                    </div>

                </div>

            </section>

        </>

    );

};

export default Features;