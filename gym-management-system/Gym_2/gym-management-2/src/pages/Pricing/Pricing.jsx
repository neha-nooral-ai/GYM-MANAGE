import "./Pricing.css";

const plans = [
    {
        name: "Basic",
        price: "₹999",
        features: ["100 Members", "Attendance", "Billing"]
    },
    {
        name: "Professional",
        price: "₹2499",
        popular: true,
        features: [
            "Unlimited Members",
            "Trainer Module",
            "Analytics",
            "Mobile App"
        ]
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: [
            "Unlimited Branches",
            "API Access",
            "Dedicated Support"
        ]
    }
];

function Pricing() {

    return (

        <section className="pricing">

            <div className="container">

                <h1>Pricing Plans</h1>

                <div className="pricing-grid">

                    {plans.map((plan, index) => (

                        <div
                            key={index}
                            className={plan.popular ? "price-card active" : "price-card"}
                        >

                            {plan.popular && <span className="badge">Most Popular</span>}

                            <h2>{plan.name}</h2>

                            <h3>{plan.price}</h3>

                            <ul>

                                {plan.features.map((item, i) =>

                                    <li key={i}>✔ {item}</li>

                                )}

                            </ul>

                            <button className="primaryBtn">

                                Choose Plan

                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default Pricing;