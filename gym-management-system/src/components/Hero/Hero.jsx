import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="hero-container">

                {/* Left */}
                <div className="hero-content">

                    <span className="hero-tag">
                        🚀 #1 Gym Management Software
                    </span>

                    <h1>
                        Transform Your
                        <span> Gym Business </span>
                        Into a Smart Digital Experience
                    </h1>

                    <p>
                        Manage memberships, trainers, attendance,
                        billing, reports and customer engagement
                        from one powerful platform.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/demo" className="btn-primary">
                            Book Free Demo
                        </Link>

                        <Link to="/features" className="btn-secondary">
                            Explore Features →
                        </Link>

                    </div>

                    <div className="hero-stats">

                        <div>
                            <h2>5000+</h2>
                            <p>Members Managed</p>
                        </div>

                        <div>
                            <h2>300+</h2>
                            <p>Gyms Connected</p>
                        </div>

                        <div>
                            <h2>98%</h2>
                            <p>Customer Satisfaction</p>
                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="hero-image">

                    <div className="dashboard-card">

                        <div className="dashboard-header">
                            Gym Dashboard
                        </div>

                        <div className="dashboard-box"></div>

                        <div className="dashboard-row">
                            <div className="small-card"></div>
                            <div className="small-card"></div>
                        </div>

                        <div className="dashboard-chart"></div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;