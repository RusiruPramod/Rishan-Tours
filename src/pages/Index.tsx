import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Tours from "@/components/Tours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <WhyChooseUs />
    <Gallery />
    <BookingForm />
    <Reviews />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
