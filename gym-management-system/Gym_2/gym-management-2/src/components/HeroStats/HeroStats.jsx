import CountUp from "react-countup";

function HeroStats() {
    const stats = [
        {
            title: "Members",
            value: 2500,
            suffix: "+"
        },
        {
            title: "Gyms",
            value: 320,
            suffix: "+"
        },
        {
            title: "Revenue",
            value: 12,
            suffix: "M"
        }
    ];

    return (
        <div className="hero-stats">
            {stats.map((item) => (
                <div className="stat-card" key={item.title}>
                    <h2>
                        {item.value}
                        {item.suffix}
                    </h2>

                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}

export default HeroStats;