import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero/Hero";
import TrustedBrands from "../../components/TrustedBrands/TrustedBrands";
import Statistics from "../../components/Statistics/Statistics";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import DashboardPreview from "../../components/DashboardPreview/DashboardPreview";
import Testimonials from "../../components/Testimonials/Testimonials";
import PricingPreview from "../../components/PricingPreview/PricingPreview";
import FAQ from "../../components/FAQ/FAQ";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <TrustedBrands />
            <Statistics />
            <WhyChooseUs />
            <FeaturesSection />
            <DashboardPreview />
            <Testimonials />
            <PricingPreview />
            <FAQ />
            <CTA />
            <Newsletter />
            <Footer />
        </MainLayout>
    );
};

export default Home;