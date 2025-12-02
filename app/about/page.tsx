import AboutHero from "../components/about/AboutHero"
import Feedback from "../components/about/Feedback"
import Mission from "../components/about/Mission"
import OurJourney from "../components/about/Ourjourney"
import Footer from "../components/common/Footer"

import Nav from "../components/common/Nav"
import Ourteam from "../components/home/Ourteam"



export default function Page(){
    return(
        <>
       
        <Nav />
        <AboutHero />
        <OurJourney />
        <Mission />
        <Feedback />
        <Ourteam />
        <Footer />
        </>
    )
}