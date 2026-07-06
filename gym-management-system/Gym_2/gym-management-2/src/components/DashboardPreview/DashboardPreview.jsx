


import {
    FaUsers,
    FaDumbbell,
    FaMoneyBillWave,
    FaArrowUp,
} from "react-icons/fa";

import FloatingCards from "../FloatingCards/FloatingCards";
import "./DashboardPreview.css";

function DashboardPreview() {
    return (
        <div className="dashboard-wrapper">
            {/* Floating Cards */}

            <FloatingCards />

            {/* Main Dashboard */}

            <div className="dashboard-preview">

                {/* Header */}

                <div className="dashboard-header">

                    <div>

                        <h3>Gym Dashboard</h3>

                        <p>Live Business Analytics</p>

                    </div>

                    <button>Today</button>

                </div>

                {/* Revenue Card */}

                <div className="dashboard-revenue">

                    <div>

                        <span>Total Revenue</span>

                        <h2>₹12,45,890</h2>

                    </div>

                    <div className="growth">

                        <FaArrowUp />

                        <span>+18%</span>

                    </div>

                </div>

                {/* Analytics Chart */}

                <div className="chart">

                    <div className="bar b1"></div>
                    <div className="bar b2"></div>
                    <div className="bar b3"></div>
                    <div className="bar b4"></div>
                    <div className="bar b5"></div>
                    <div className="bar b6"></div>
                    <div className="bar b7"></div>

                </div>

                {/* Bottom Statistics */}

                <div className="dashboard-cards">

                    <div className="mini-card">

                        <FaUsers />

                        <div>

                            <h4>2500+</h4>

                            <span>Active Members</span>

                        </div>

                    </div>

                    <div className="mini-card">

                        <FaDumbbell />

                        <div>

                            <h4>65</h4>

                            <span>Personal Trainers</span>

                        </div>

                    </div>

                    <div className="mini-card">

                        <FaMoneyBillWave />

                        <div>

                            <h4>320</h4>

                            <span>Membership Plans</span>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default DashboardPreview;