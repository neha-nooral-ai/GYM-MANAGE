import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { FaStar } from "react-icons/fa";

const testimonials = [

    {
        name: "Rahul Sharma",
        role: "Gym Owner",
        image: "https://i.pravatar.cc/150?img=11",
        review:
            "GymPro completely transformed our gym operations. Attendance, billing, trainer management and reports are now effortless."
    },

    {
        name: "Priya Verma",
        role: "Fitness Manager",
        image: "https://i.pravatar.cc/150?img=32",
        review:
            "Beautiful interface with powerful analytics. We increased membership renewals by more than 35% within a few months."
    },

    {
        name: "Amit Patel",
        role: "Branch Manager",
        image: "https://i.pravatar.cc/150?img=15",
        review:
            "The dashboard is simple, modern and incredibly fast. Highly recommended for multi-branch gym management."
    },

    {
        name: "Sneha Kulkarni",
        role: "Gym Owner",
        image: "https://i.pravatar.cc/150?img=48",
        review:
            "Excellent customer support and a professional product. Billing, attendance and trainer management are all integrated."
    }

];

function Testimonials() {

    return (

        <section className="testimonials">

            <div className="container">

                <div className="section-title">

                    <span>TESTIMONIALS</span>

                    <h2>

                        Loved By
                        <br />

                        Gym Owners

                    </h2>

                    <p>

                        Thousands of gyms trust GymPro
                        to manage their complete business.

                    </p>

                </div>

                <Swiper

                    slidesPerView={3}
                    spaceBetween={30}

                    loop={true}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}

                    modules={[Autoplay]}

                    breakpoints={{

                        0: {
                            slidesPerView: 1
                        },

                        768: {
                            slidesPerView: 2
                        },

                        1200: {
                            slidesPerView: 3
                        }

                    }}

                >

                    {

                        testimonials.map((item, index) => (

                            <SwiperSlide key={index}>

                                <div className="testimonial-card">

                                    <div className="stars">

                                        {

                                            [...Array(5)].map((_, i) => (

                                                <FaStar key={i} />

                                            ))

                                        }

                                    </div>

                                    <p className="review">

                                        "{item.review}"

                                    </p>

                                    <div className="user">

                                        <img

                                            src={item.image}

                                            alt={item.name}

                                        />

                                        <div>

                                            <h4>

                                                {item.name}

                                            </h4>

                                            <span>

                                                {item.role}

                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))

                    }

                </Swiper>

            </div>

        </section>

    )

}

export default Testimonials;