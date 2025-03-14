import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
// import Clients from "./sections/Clients.jsx";
// import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    )
}
export default App
