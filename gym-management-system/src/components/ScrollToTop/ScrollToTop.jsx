import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };

    return (

        <button
            className={`scroll-btn ${visible ? "show" : ""}`}
            onClick={scrollTop}
        >

            <FaArrowUp />

        </button>

    );

};

export default ScrollToTop;