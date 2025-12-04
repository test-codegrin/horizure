import Image from "next/image";
import Hero from "./components/home/Hero"
import Nav from "./components/common/Nav"
import WhoWeAre from "./components/home/WhoWeAre";
import Portfolio from "./components/home/Portfolio";
import Services from "./components/home/Services";
import Ourteam from "./components/home/Ourteam";
import Articles from "./components/home/Articles";
import CustomerReview from "./components/home/CustomerReview";
import ContactForm from "./components/home/ContactFormHome";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <WhoWeAre />
    <Portfolio />
    <Services />
    <Ourteam />
    <Articles />
    <CustomerReview />
    <ContactForm />
    <Footer />
    
    </>
  );
}
