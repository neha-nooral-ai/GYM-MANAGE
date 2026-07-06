import { useEffect, useState } from "react";
import "./ScrollProgress.css";

function ScrollProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const updateProgress = () => {

            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scroll =
                window.scrollY;

            const percentage =
                (scroll / totalHeight) * 100;

            setProgress(percentage);
        };

        window.addEventListener("scroll", updateProgress);

        return () =>
            window.removeEventListener("scroll", updateProgress);

    }, []);

    return (

        <div
            className="scroll-progress"
            style={{ width: `${progress}%` }}
        />

    );
}

export default ScrollProgress;