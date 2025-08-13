import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import TechStacks from "./components/TechStacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="px-25 m-5">
        <div className="bg-grid-full"></div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <TechStacks />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
