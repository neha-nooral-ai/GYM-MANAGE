import { useState } from "react";
import "./FAQ.css";

const faqs = [
    {
        q: "Can I manage multiple branches?",
        a: "Yes, unlimited branches can be managed."
    },
    {
        q: "Does it support online payments?",
        a: "Yes. Razorpay, Stripe and more."
    },
    {
        q: "Can trainers access the system?",
        a: "Yes, trainers get separate dashboards."
    }
];

function FAQ() {

    const [open, setOpen] = useState(0);

    return (

        <section className="faq">

            <div className="container">

                <h2>Frequently Asked Questions</h2>

                {

                    faqs.map((item, index) => (

                        <div
                            className="faq-item"
                            key={index}
                        >

                            <div

                                className="faq-question"

                                onClick={() => setOpen(index)}

                            >

                                {item.q}

                            </div>

                            {

                                open === index &&

                                <p>{item.a}</p>

                            }

                        </div>

                    ))

                }

            </div>

        </section>

    )

}

export default FAQ;