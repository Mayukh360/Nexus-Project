import React from "react";
import prod8 from "../assets/prod8.avif";

export default function CorporateGifts() {
  return (
    <section
      style={{ paddingTop: "5rem", paddingLeft: "2rem" }}
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
    >
      <div style={{ maxWidth: "500px" }}>
        <h3 className="text-4xl font-bold mt-2">Post-Poo Drops has returned</h3>
        <p className="mt-2 font-serif text-lg">
          Here to make the malodorous melodious once again. Dispense this
          favoured formulation into the toilet bowl after flushing to
          effectively mask disagreeable odours.
        </p>
        <button
          style={{ width: "300px" }}
          className="bg-transparent text-black mt-8 hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded transition duration-500 relative"
        >
          Discover Post-Poo Drops
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
        <img src={prod8} alt="Profile" className="w-full" />
      </div>
    </section>
  );
}
