import "./DashboardPreview.css";
import { motion } from "framer-motion";

import {
    FaUsers,
    FaMoneyBillWave,
    FaChartLine,
    FaUserCheck,
    FaCalendarCheck,
} from "react-icons/fa";

const cards = [
    {
        icon: <FaUsers />,
        title: "Active Members",
        value: "5,248",
        color: "purple",
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Monthly Revenue",
        value: "₹12.6L",
        color: "green",
    },
    {
        icon: <FaUserCheck />,
        title: "Today's Check-ins",
        value: "386",
        color: "blue",
    },
    {
        icon: <FaCalendarCheck />,
        title: "Classes Today",
        value: "24",
        color: "orange",
    },
];

const DashboardPreview = () => {
    return (
        <section className="dashboard">

            <div className="dashboard-left">

                <span className="dashboard-tag">
                    LIVE DASHBOARD
                </span>

                <h2>
                    Control Your Entire
                    <span> Gym Business </span>
                    From One Dashboard
                </h2>

                <p>
                    Monitor memberships, attendance,
                    payments, trainers and business
                    performance using beautiful
                    real-time analytics.
                </p>

                <div className="dashboard-list">
                    <div>✔ Member Management</div>
                    <div>✔ Attendance Tracking</div>
                    <div>✔ Online Payments</div>
                    <div>✔ Reports & Analytics</div>
                    <div>✔ Trainer Scheduling</div>
                    <div>✔ QR Check-in</div>
                </div>

            </div>

            <motion.div
                className="dashboard-right"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

                <div className="dashboard-window">

                    <div className="window-header">

                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <h3>GymPro Dashboard</h3>

                    </div>

                    <div className="cards-grid">

                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className={`mini-card ${item.color}`}
                            >

                                <div className="mini-icon">
                                    {item.icon}
                                </div>

                                <h4>{item.value}</h4>

                                <p>{item.title}</p>

                            </div>
                        ))}

                    </div>

                    <div className="chart-box">

                        <div className="chart-title">
                            <FaChartLine />
                            <span>Revenue Overview</span>
                        </div>

                        <div className="chart">
                            <div className="bar b1"></div>
                            <div className="bar b2"></div>
                            <div className="bar b3"></div>
                            <div className="bar b4"></div>
                            <div className="bar b5"></div>
                            <div className="bar b6"></div>
                        </div>

                    </div>

                    <div className="growth-card">

                        <div className="mini-icon">
                            <FaChartLine />
                        </div>

                        <div>
                            <h3>+32%</h3>
                            <p>Business Growth</p>
                        </div>

                    </div>

                </div>

            </motion.div>

        </section>
    );
};

export default DashboardPreview;