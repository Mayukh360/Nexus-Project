import React from "react";
import girl from "../assets/girl.jpg";

export default function CorporateGifts() {
  return (
    <div className="flex flex-wrap my-8">
      {/* leftpart */}
      <div className="w-1/2 mr-8 w-full">
        <img src={girl} className="w-full" />
      </div>

      {/* rightpart */}
      <div style={{ maxWidth: "500px" }}>
        <p>Tokens of appreciation</p>
        <h3 className="text-3xl mt-4">Corporate Gifts</h3>
        <p className="mt-3 font-serif text-md">
          Find a variety of gift-giving options, ideal for honouring treasured
          colleagues and clients. Trained consultants will be pleased to guide
          your selections and assist with delivery.
        </p>
        <button
          style={{ width: "300px" }}
          className="bg-transparent text-black mt-8 hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded transition duration-500 relative"
        >
          Learn more about this service
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
