import React,{useState} from "react";
import { motion } from "framer-motion";
import store1 from "../assets/store1.avif";
import store2 from "../assets/store2.avif";
import store3 from "../assets/store3.jpg";


export default function StoreLoactor() {
  const products = [
    {
      id: 1,
      image: store1,
    },
    {
      id: 2,
      image: store2,
    },
    {
      id: 1,
      image: store3,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section
      style={{ paddingTop: "5rem", paddingLeft: "2rem" }}
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
    >
      <div style={{ maxWidth: "500px" }}>
        <h3 className="text-3xl  mt-2">Store Locator</h3>
        <p className="mt-2 font-serif text-lg">
          Here to make the malodorous melodious once again. Dispense this
          favoured formulation into the toilet bowl after flushing to
          effectively mask disagreeable odours.
        </p>
        <button
          style={{ width: "200px" }}
          className="bg-transparent text-black mt-8 hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded transition duration-500 relative"
        >
          Find a nearby store
          <span
            className="absolute top-1/2 right-3  transform -translate-y-1/2"
            style={{ width: "10px", height: "10px" }}
          >
            <span className="block w-full h-full border-t border-r border-white transform rotate-45 -translate-x-1 -translate-y-1/2" />
          </span>
        </button>
      
      </div>

      {/* RIGHT SECTION */}
      <div className="relative flex items-center mt-2">
      <motion.div
        className="w-[900px] h-[400px] overflow-hidden"
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          key={products[currentImage].id}
          src={products[currentImage].image}
          alt={`Image ${currentImage}`}
          className="w-full h-full absolute top-0 left-0 object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800 rounded-full p-2"
        onClick={prevImage}
      >
        &lt;
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800 rounded-full p-2"
        onClick={nextImage}
      >
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center">
        {products.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-6 mx-1 rounded-full ${
              index === currentImage ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
      
    </section>
  );
}
