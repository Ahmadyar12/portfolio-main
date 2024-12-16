import Navbar from "../Navbar/Navbar.jsx"
import Hero from "../Hero/Hero.jsx"
import About from "../AboutMe/About.jsx"
import Skills from "../Skills/Skills.jsx"
import Resume from "../Resume/Resume.jsx"
import Portfolio from "../Portfolio/Portfolio.jsx"
import HireMe from "../HireMe/HireMe.jsx"
import Question from "../Question/Question.jsx"
import Clientspeak from "../Clientspeak/Clientspeak.jsx"
import Contact from "../Contact/Contact.jsx"
import Footer from "../Footer/Footer.jsx"
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Portfolio />
            <HireMe />
            <Question />
            <Clientspeak />
            <Contact />
            <Footer />
        </>

    )
}
export default Home