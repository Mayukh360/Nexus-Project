import React from "react";
import prodVideo from "../assets/prodVideo.mp4";

export default function Projects() {
  return (
    <div className="flex flex-wrap my-8">
      {/* leftpart */}
      <div className="w-1/2 mr-8 w-full">
        <video src={prodVideo} autoPlay loop muted className="w-full" />
      </div>

      {/* rightpart */}
      <div style={{ maxWidth: "500px" }}>
        <p>The Athenaeum</p>
        <h3 className="text-3xl font-bold mt-4">
        Lessons from the lab
        </h3>
        <p className="mt-2 font-serif text-sm">
        In this instalment of our ‘Under the Microscope’ series: a focus on anti-oxidant-rich skin care and its benefits to city-dwellers.
        </p>
        <button
          style={{ width: "300px" }}
          className="bg-transparent text-black mt-8 hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded transition duration-500 relative"
        >
         Read More
          <span
            className="absolute top-1/2 right-3  transform -translate-y-1/2"
            style={{ width: "10px", height: "10px" }}
          >
            <span className="block w-full h-full border-t border-r border-white transform rotate-45 -translate-x-1 -translate-y-1/2" />
          </span>
        </button>
      </div>
    </div>
  );
}
