import {
    FaUsers,
    FaBuilding,
    FaDumbbell,
    FaAward,
} from "react-icons/fa";
import "./Statistics.css";

const stats = [
    {
        icon: <FaUsers />,
        number: "25,000+",
        title: "Active Members",
    },
    {
        icon: <FaBuilding />,
        number: "500+",
        title: "Gyms Connected",
    },
    {
        icon: <FaDumbbell />,
        number: "1,200+",
        title: "Professional Trainers",
    },
    {
        icon: <FaAward />,
        number: "99%",
        title: "Customer Satisfaction",
    },
];

const Statistics = () => {
    return (
        <section className="statistics">
            <div className="stats-heading">
                <h2>Our Achievements</h2>
                <p>
                    Thousands of gyms trust our Gym Management Software every day.
                </p>
            </div>

            <div className="stats-container">
                {stats.map((item, index) => (
                    <div className="stats-card" key={index}>
                        <div className="stats-icon">{item.icon}</div>

                        <h3>{item.number}</h3>

                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;