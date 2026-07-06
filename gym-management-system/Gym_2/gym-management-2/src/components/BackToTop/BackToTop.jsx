import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

import "./BackToTop.css";

function BackToTop() {

    const [show, setShow] = useState(false);

    useEffect(() => {

        const toggleButton = () => {

            setShow(window.scrollY > 500);

        };

        window.addEventListener("scroll", toggleButton);

        return () =>
            window.removeEventListener("scroll", toggleButton);

    }, []);

    return (

        <button

            className={
                show
                    ? "back-top show"
                    : "back-top"
            }

            onClick={() =>

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                })

            }

        >

            <FaArrowUp />

        </button>

    );

}

export default BackToTop;