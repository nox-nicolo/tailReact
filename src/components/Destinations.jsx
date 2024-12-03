// eslint-disable-next-line no-unused-vars
import React from 'react';
import serengeti from "../assets/images/serengeti.jpeg";
import ngorongoro from "../assets/images/ngorongoro.jpeg";
import kilimanjaro from "../assets/images/mt kilimanjaro.jpg";
import zanzibar from "../assets/images/zanzibar.jpeg";
import natron from "../assets/images/natron.jpg";
import tarangire from "../assets/images/tarangire.jpg";

const destinations = [
  {
    name: "Serengeti National Park",
    image: serengeti, 
    description: "A vast wildlife paradise with stunning landscapes.",
    link: "/destinations/serengeti"
  },
  {
    name: "Ngorongoro Crater",
    image: ngorongoro, 
    description: "A natural wonder and wildlife haven.",
    link: "/destinations/ngorongoro"
  },
  {
    name: "Mount Kilimanjaro",
    image: kilimanjaro, 
    description: "The tallest mountain in Africa, a hiker's dream.",
    link: "/destinations/kilimanjaro"
  },
  {
    name: "Zanzibar",
    image: zanzibar, 
    description: "An exotic island with beautiful beaches and culture.",
    link: "/destinations/zanzibar"
  },
  {
    name: "Lake Natron",
    image: natron, 
    description: "The largest lake in Africa, surrounded by breathtaking beauty.",
    link: "/destinations/victoria"
  },
  {
    name: "Tarangire National Park",
    image: tarangire, 
    description: "Famous for its elephants and diverse wildlife.",
    link: "/destinations/tarangire"
  }
];

const Destinations = () => {
  return (
    <div className="bg-[#000300] py-12 px-6 xl:h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-bold text-white mb-4 xl:text-3xl">Explore Our Destinations</h2>
        <p className="text-md text-gray-300 xl:text-xl">Hand-picked places for unforgettable experiences.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg ">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{destination.description}</p>
              <a
                href={destination.link}
                className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full text-center hover:bg-green-900"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className=" relative h-24 text-center mt-12">
        <a
          href="/destinations"
          className="bg-green-700 absolute bottom-0 right-0.5 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-green-900 transition duration-300 md:text-md xl:text-lg"
        >
          See All Destinations
        </a>
      </div>
    </div>
  );
}

export default Destinations;
