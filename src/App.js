import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import { FiMessageCircle } from "react-icons/fi";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";

import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";
import Prod from "./scenes/Prod";
import CorporateGifts from "./scenes/CorporateGifts";
import StoreLoactor from "./scenes/StoreLocator";
import Footer from "./footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <Landing />
      <Prod />
      <Projects />
      <Testimonials />
      <div className="fixed bottom-6 right-6 bg-gray-800 rounded-full p-3 cursor-pointer text-white">
        <FiMessageCircle className="w-6 h-6" />
      </div>
      <Contact />
      <CorporateGifts />
      <StoreLoactor />
      <Footer />
    </div>
  );
}

export default App;
