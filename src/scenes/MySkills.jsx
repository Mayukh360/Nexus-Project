import { motion } from "framer-motion";
import { useState, useRef } from "react";
import prod1 from "../assets/prod1.webp";
import prod2 from "../assets/prod2.webp";
import prod3 from "../assets/prod3.webp";
import prod4 from "../assets/prod4.webp";
import prod5 from "../assets/prod5.webp";
import prod6 from "../assets/prod5.webp";
import prod7 from "../assets/prod7.avif";

const MySkills = () => {
  const products = [
    {
      image: prod1,
      heading: "Product 1",
      subheading: "Subheading 1",
    },
    {
      image: prod2,
      heading: "Product 2",
      subheading: "Subheading 2",
    },
    {
      image: prod3,
      heading: "Product 3",
      subheading: "Subheading 3",
    },
    {
      image: prod4,
      heading: "Product 1",
      subheading: "Subheading 1",
    },
    {
      image: prod5,
      heading: "Product 2",
      subheading: "Subheading 2",
    },
    {
      image: prod6,
      heading: "Product 3",
      subheading: "Subheading 3",
    },
    {
      image: prod6,
      heading: "Product 3",
      subheading: "Subheading 3",
    },
    // Add more products here
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = containerRef.current.offsetWidth;
    const maxScroll = containerRef.current.scrollWidth - containerWidth;
    let newPosition;

    if (direction === "left") {
      newPosition = scrollPosition - 10; // Adjust the scroll speed as needed
      if (newPosition < 0) {
        newPosition = 0;
      }
    } else if (direction === "right") {
      newPosition = scrollPosition + 10; // Adjust the scroll speed as needed
      if (newPosition > 100) {
        newPosition = 100;
      }
    }

    containerRef.current.scrollTo((newPosition * maxScroll) / 100, 0);
    setScrollPosition(newPosition);
  };

  return (
    <section className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
      <div className="w-full h-screen overflow-hidden relative">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition duration-300"
          onClick={() => handleScroll("left")}
        >
          Left
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition duration-300"
          onClick={() => handleScroll("right")}
        >
          Right
        </button>

        <div
          ref={containerRef}
          className=" relative flex item-center"
         
        >
          <div id="slider"></div>
          <div
            style={{ maxWidth: "500px", flexShrink: 0 }}
            className="mt-24"
          >
            <p className="font-bold">Parsley Seed Skin Care</p>
            <h3 className="text-3xl font-bold mt-4">
              Fortification of the highest order
            </h3>
            <p className="mt-2 font-serif text-sm">
              Our Parsley Seed Skin Care range provides potent doses of
              anti-oxidant rich ingredients in formulations suited to all skin
              types. They are especially recommended for those in urban
              environments, to fortify the skin against the damaging effects of
              free radicals.
            </p>
            <button
              style={{ width: "300px" }}
              className="bg-transparent text-black mt-8 hover:bg-black text-white hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded transition duration-500 relative"
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
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex-none w-64 h-64 m-2 p-4 border border-gray-300 flex items-center justify-center"
              style={{
                scrollSnapAlign: "start",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={product.image} alt="Product" />
              <div className="text-center">
                <h3 className="text-lg font-semibold">{product.heading}</h3>
                <p className="text-sm">{product.subheading}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
