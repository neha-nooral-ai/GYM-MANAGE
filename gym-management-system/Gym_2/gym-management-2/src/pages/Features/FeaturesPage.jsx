import {
    FaUsers,
    FaFingerprint,
    FaMoneyBillWave,
    FaChartLine,
    FaUserTie,
    FaMobileAlt,
} from "react-icons/fa";

import "./FeaturesPage.css";

const features = [
    {
        icon: <FaUsers />,
        title: "Member Management",
        desc: "Create unlimited members, manage profiles, renew memberships and monitor activity."
    },
    {
        icon: <FaFingerprint />,
        title: "Attendance Tracking",
        desc: "Biometric, QR Code and RFID attendance with live dashboard."
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Billing & Payments",
        desc: "Generate invoices, collect online payments and automate reminders."
    },
    {
        icon: <FaChartLine />,
        title: "Reports & Analytics",
        desc: "Revenue reports, growth charts and business insights."
    },
    {
        icon: <FaUserTie />,
        title: "Trainer Management",
        desc: "Assign trainers, schedules and workout plans."
    },
    {
        icon: <FaMobileAlt />,
        title: "Mobile App",
        desc: "Members can access plans, attendance and payments anytime."
    },
];

function FeaturesPage() {
    return (
        <section className="features-page">
            <div className="container">

                <h1>Powerful Features</h1>
                <p className="subtitle">
                    Everything required to manage a modern fitness business.
                </p>

                <div className="feature-list">
                    {features.map((feature, index) => (
                        <div className="feature-item" key={index}>
                            <div className="feature-icon">{feature.icon}</div>

                            <div>
                                <h2>{feature.title}</h2>
                                <p>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FeaturesPage;