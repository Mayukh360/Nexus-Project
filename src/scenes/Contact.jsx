import { motion } from "framer-motion";
import { useState, useRef } from "react";
import prod8 from "../assets/prod8.avif";
import prod9 from "../assets/prod9.avif";
import prod10 from "../assets/prod10.webp";
import prod11 from "../assets/prod11.webp";
import prod12 from "../assets/prod12.webp";
import prod13 from "../assets/prod13.webp";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Prod() {
  const products = [
    {
      image: prod9,
      heading: "Product 1",
      subheading: "Subheading 1",
    },
    {
      image: prod10,
      heading: "Product 2",
      subheading: "Subheading 2",
    },
    {
      image: prod10,
      heading: "Product 3",
      subheading: "Subheading 3",
    },
    {
      image: prod10,
      heading: "Product 1",
      subheading: "Subheading 1",
    },
    {
      image: prod12,
      heading: "Product 2",
      subheading: "Subheading 2",
    },
    {
      image: prod13,
      heading: "Product 3",
      subheading: "Subheading 3",
    },
    {
      image: prod12,
      heading: "Product 3",
      subheading: "Subheading 3",
    },
    // Add more products here
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="relative flex items-center">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100"
        size={40}
        onClick={slideLeft}
      />
      <div
        id="slider1"
        className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth "
      >
        <div style={{ Width: "100px" }} className="mt-24">
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
            className="bg-transparent text-black mt-8  font-semibold py-2 px-4   rounded transition duration-500 relative"
          >
            Explore The Range
          </button>
        </div>
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="w-64 h-64 inline-block p-2 cursor-poonter hover:scale-105 ease-in-out duration-300"
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
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100"
        size={40}
        onClick={slideRight}
      />
    </div>
  );
}