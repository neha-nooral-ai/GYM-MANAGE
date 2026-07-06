
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Trusted from "../../components/Trusted/Trusted";
import Features from "../../components/Features/Features";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Stats from "../../components/Stats/Stats";
import Pricing from "../../components/Pricing/Pricing";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Trusted />
            <Features />
            <WhyChoose />
            <Stats />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;