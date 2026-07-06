import "./Contact.css";

function Contact() {

    return (

        <section className="contact">

            <div className="container">

                <h1>Contact Us</h1>

                <div className="contact-grid">

                    <form>

                        <input
                            type="text"
                            placeholder="Full Name"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                        />

                        <input
                            type="text"
                            placeholder="Phone"
                        />

                        <textarea
                            rows="5"
                            placeholder="Message"
                        />

                        <button
                            className="primaryBtn"
                        >

                            Send Message

                        </button>

                    </form>

                    <div className="contact-info">

                        <h2>

                            Let's Talk

                        </h2>

                        <p>

                            📧 support@gympro.com

                        </p>

                        <p>

                            📞 +91 9876543210

                        </p>

                        <p>

                            📍 Aurangabad, Maharashtra

                        </p>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Contact;