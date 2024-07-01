import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Portfolio from "./components/portfolio";
import "./index.css"

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
    
  );
}

export default App;