import "./Testimonials.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Owner • Fitness Zone",
        image: "https://i.pravatar.cc/150?img=12",
        review:
            "GymPro completely transformed our gym operations. Attendance, billing, and reports are now fully automated.",
    },
    {
        name: "Priya Patel",
        role: "Manager • Iron Fitness",
        image: "https://i.pravatar.cc/150?img=25",
        review:
            "The interface is beautiful and very easy to use. Member management now takes only a few minutes.",
    },
    {
        name: "Amit Verma",
        role: "Founder • Beast Gym",
        image: "https://i.pravatar.cc/150?img=18",
        review:
            "Excellent dashboard with detailed reports. Our monthly revenue increased significantly after using GymPro.",
    },
    {
        name: "Sneha Kulkarni",
        role: "Operations Head",
        image: "https://i.pravatar.cc/150?img=45",
        review:
            "The automation features save hours every week. Highly recommended for modern fitness businesses.",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonial-section">

            <div className="testimonial-title">

                <span>TESTIMONIALS</span>

                <h2>
                    Loved By
                    <span> Gym Owners</span>
                </h2>

                <p>
                    Hundreds of fitness businesses trust GymPro
                    to manage their daily operations.
                </p>

            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}

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

                        <motion.div

                            className="testimonial-card"

                            initial={{ opacity: 0, y: 60 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            transition={{ duration: .5 }}

                            viewport={{ once: true }}

                        >

                            <div className="stars">

                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

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

                                    <h4>{item.name}</h4>

                                    <span>{item.role}</span>

                                </div>

                            </div>

                        </motion.div>

                    </SwiperSlide>

                ))

            }

        </Swiper>

    </section >
  );
};

export default Testimonials;