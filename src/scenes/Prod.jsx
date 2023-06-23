import { motion } from "framer-motion";

import prod1 from "../assets/prod1.webp";
import prod2 from "../assets/prod2.webp";
import prod3 from "../assets/prod3.webp";
import prod4 from "../assets/prod4.webp";
import prod5 from "../assets/prod5.webp";
import prod6 from "../assets/prod6.webp";
import prod7 from "../assets/prod7.avif";
import prod8 from "../assets/prod07.webp";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Prod() {
  const products = [
    {
      image: prod1,
      heading: "Parsley Seed Anti-Oxidant Skin Care Kit ",
      subheading: "A trio of Parseley Seed staples",
    },
    {
      image: prod2,
      heading: "Parsley Seed Anti-Oxidant Eye Cream",
      subheading: "Nourishes delicate around eyes",
    },
    {
      image: prod3,
      heading: "Parsley Seed Facial Cleansing Oil",
      subheading: "Gently liberate skin of grime and makeup",
    },
    {
      image: prod4,
      heading: "Parsley Seed Facial Cleanser",
      subheading: "For those in polluted urban environments",
    },
    {
      image: prod5,
      heading: "Parsley Seed Anti-Oxidant Hydrating Cream",
      subheading: "A potent, nourishing cream",
    },
    {
      image: prod6,
      heading: "Parsley Seed Anti-Oxidant Hydrator",
      subheading: "light, rapidly absorbed folication",
    },
    {
      image: prod8,
      heading: "Parsley Seed Anti-Oxidant Facial Treatment",
      subheading: "Fortifies,revives and intensely hydrates",
    },
    {
      image: prod7,
      heading: "Parsley Seed Anti-Oxidant Facial Toner",
      subheading: "For normal, dry or sensitive skin",
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
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
        id="slider"
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
          <button type="button" className="btn bg-transparent text-black">
            Explore the range{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right ml-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="w-64 h-64 inline-block p-2 ml-8 mr-8 cursor-poonter hover:scale-105 ease-in-out duration-300"
            style={{
              scrollSnapAlign: "start",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={product.image} alt="Product" />
            <div className="text-center">
              <h3 className="text-sm font-semibold">{product.heading}</h3>
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
