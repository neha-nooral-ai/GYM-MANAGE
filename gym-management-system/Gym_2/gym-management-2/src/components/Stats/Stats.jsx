import "./Stats.css";

function Stats() {
    const statsData = [
        {
            value: 2500,
            suffix: "+",
            title: "Members",
        },
        {
            value: 320,
            suffix: "+",
            title: "Gyms",
        },
        {
            value: 98,
            suffix: "%",
            title: "Retention",
        },
        {
            value: 12,
            suffix: "M",
            title: "Revenue",
        },
    ];

    return (
        <section className="stats">
            <div className="container stats-grid">
                {statsData.map((item, index) => (
                    <div className="stat-box" key={index}>
                        <h2>
                            {item.value}
                            {item.suffix}
                        </h2>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;