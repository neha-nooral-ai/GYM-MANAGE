import "./Trusted.css";

function Trusted() {

    const companies = [

        "Gold's Gym",
        "Anytime Fitness",
        "Cult.fit",
        "Power World",
        "FitLife",
        "Muscle Factory"

    ];

    return (

        <section className="trusted">

            <div className="container">

                <p className="trusted-title">

                    Trusted by 500+ Gyms Across India

                </p>

                <div className="trusted-slider">

                    <div className="trusted-track">

                        {[...companies, ...companies].map((company, index) => (

                            <div
                                className="trusted-item"
                                key={index}
                            >

                                {company}

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Trusted;