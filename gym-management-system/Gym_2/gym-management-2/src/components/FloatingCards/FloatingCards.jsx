import {
    FaUsers,
    FaBell,
    FaChartLine,
    FaCheckCircle
} from "react-icons/fa";

import "./FloatingCards.css";

function FloatingCards() {
    return (
        <>

            {/* Members */}

            <div className="floating-card members-card">

                <FaUsers className="icon" />

                <div>

                    <h3>2500+</h3>

                    <span>Active Members</span>

                </div>

            </div>

            {/* Attendance */}

            <div className="floating-card attendance-card">

                <FaCheckCircle className="icon green" />

                <div>

                    <h3>98%</h3>

                    <span>Today's Attendance</span>

                </div>

            </div>

            {/* Revenue */}

            <div className="floating-card revenue-card">

                <FaChartLine className="icon orange" />

                <div>

                    <h3>₹12.4M</h3>

                    <span>Monthly Revenue</span>

                </div>

            </div>

            {/* Notification */}

            <div className="floating-card notification-card">

                <FaBell className="icon" />

                <div>

                    <h4>New Membership</h4>

                    <span>Rahul joined Gold Plan</span>

                </div>

            </div>

        </>
    );
}

export default FloatingCards;