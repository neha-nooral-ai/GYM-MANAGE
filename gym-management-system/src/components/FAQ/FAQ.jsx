import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
    {
        question: "Can I manage multiple gym branches?",
        answer:
            "Yes. Our platform supports multiple branches with centralized reports, trainers, members and revenue tracking."
    },
    {
        question: "Does the software support online payments?",
        answer:
            "Absolutely. Members can pay online using secure payment gateways and receive automatic invoices."
    },
    {
        question: "Can members check in using QR Code?",
        answer:
            "Yes. QR Code, RFID and biometric attendance are fully supported."
    },
    {
        question: "Will I get business reports?",
        answer:
            "You'll receive detailed revenue, attendance, membership, trainer and financial reports."
    },
    {
        question: "Do you provide customer support?",
        answer:
            "Yes. Our support team is available 24×7 through Email, Chat and Phone."
    }
];

const FAQ = () => {

    const [active, setActive] = useState(0);

    const toggle = (index) => {

        setActive(active === index ? null : index);

    };

    return (

        <section className="faq">

            <div className="faq-heading">

                <span>FAQ</span>

                <h2>

                    Frequently Asked
                    <span> Questions</span>

                </h2>

                <p>

                    Everything you need to know before
                    choosing our Gym Management System.

                </p>

            </div>

            <div className="faq-container">
                {

                    faqData.map((item, index) => (

                        <div

                            className={`faq-item ${active === index ? "active" : ""}`}

                            key={index}

                        >

                            <div

                                className="faq-question"

                                onClick={() => toggle(index)}

                            >

                                <h3>

                                    {item.question}

                                </h3>

                                <span>

                                    {

                                        active === index ?

                                            <FaMinus />

                                            :

                                            <FaPlus />

                                    }

                                </span>

                            </div>

                            <AnimatePresence>

                                {

                                    active === index && (

                                        <motion.div

                                            className="faq-answer"

                                            initial={{ height: 0, opacity: 0 }}

                                            animate={{ height: "auto", opacity: 1 }}

                                            exit={{ height: 0, opacity: 0 }}

                                            transition={{ duration: .35 }}

                                        >

                                            <p>

                                                {item.answer}

                                            </p>

                                        </motion.div>

                                    )

                                }

                            </AnimatePresence>

                        </div>

                    ))

                }

            </div>

        </section>

    )

}

export default FAQ;