import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import image from "../assets/nexus1.avif";
// import { saveAs } from 'file-saver';

const Landing = () => {
  return (
    <section
      style={{ backgroundColor: "#efefd7", paddingTop: "5rem", paddingLeft:"2rem" }}
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
    >
      <div style={{ maxWidth: "500px" }}>
        <h2 className="text-4xl font-bold mr-16">Aesop</h2>
        <p>Supporting city skin</p>
        <h3 className="text-3xl font-bold mt-4">
          Parsley Seed Anti-Oxidant Intense Serum
        </h3>
        <p className="mt-2 font-serif text-md">
          Explore how this anti-oxidant-rich serum hydrates, replenishes and
          fortifies the skin via a suite of ingredients selected with urban
          dwellers in mind.
        </p>
        <button
          style={{ width: "300px" }}
          className="bg-transparent text-black mt-8 hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded transition duration-500 relative"
        >
          Discover the formulation
          <span
            className="absolute top-1/2 right-3  transform -translate-y-1/2"
            style={{ width: "10px", height: "10px" }}
          >
            <span className="block w-full h-full border-t border-r border-white transform rotate-45 -translate-x-1 -translate-y-1/2" />
          </span>
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="md:w-1/2 mt-1">
        <img src={image} alt="Profile" className="w-full" />
      </div>
    </section>
  );
};

export default Landing;
