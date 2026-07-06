import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

import { motion } from "framer-motion";
import "./CTA.css";

function CTA() {

    return (

        <section className="cta">

            <div className="container cta-wrapper">

                {/* LEFT */}

                <motion.div

                    className="cta-left"

                    initial={{ opacity: 0, x: -60 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                >

                    <span className="section-tag">

                        GET STARTED

                    </span>

                    <h2>

                        Ready To Grow
                        <br />

                        Your Gym Business?

                    </h2>

                    <p>

                        Join hundreds of successful gym owners using
                        GymPro to manage members, trainers,
                        attendance, billing and reports from one place.

                    </p>

                    <div className="contact-info">

                        <div>

                            <FaPhoneAlt />

                            <span>+91 9876543210</span>

                        </div>

                        <div>

                            <FaEnvelope />

                            <span>support@gympro.com</span>

                        </div>

                        <div>

                            <FaMapMarkerAlt />

                            <span>Aurangabad, Maharashtra</span>

                        </div>

                    </div>

                </motion.div>

                {/* RIGHT */}

                <motion.div

                    className="cta-form"

                    initial={{ opacity: 0, x: 60 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .8 }}

                >

                    <h3>

                        Book Free Demo

                    </h3>

                    <form>

                        <input

                            type="text"

                            placeholder="Full Name"

                        />

                        <input

                            type="email"

                            placeholder="Email Address"

                        />

                        <input

                            type="text"

                            placeholder="Phone Number"

                        />

                        <input

                            type="text"

                            placeholder="Gym Name"

                        />

                        <textarea

                            rows="5"

                            placeholder="Tell us about your gym"

                        ></textarea>

                        <button className="primaryBtn">

                            Schedule Demo

                        </button>

                    </form>

                </motion.div>

            </div>

        </section>

    )

}

export default CTA;