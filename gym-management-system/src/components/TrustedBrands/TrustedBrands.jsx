import { motion } from "framer-motion";
import "./TrustedBrands.css";

const brands = [
    "Gold's Gym",
    "Fitness First",
    "Anytime Fitness",
    "Power House",
    "Muscle Factory",
    "Flex Gym",
];

const TrustedBrands = () => {
    return (
        <section className="trusted">

            <div className="trusted-title">

                <p>Trusted by 500+ Fitness Businesses</p>

            </div>

            <motion.div
                className="brand-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                {brands.map((brand, index) => (
                    <div key={index} className="brand-card">
                        {brand}
                    </div>
                ))}
            </motion.div>

        </section>
    );
};

export default TrustedBrands;