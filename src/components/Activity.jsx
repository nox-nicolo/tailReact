// eslint-disable-next-line no-unused-vars
import React from 'react';
import serengeti from "../assets/images/hotairbaloon.jpeg";
import ngorongoro from "../assets/images/ngorongoro.jpeg";
import kilimanjaro from "../assets/images/mt kilimanjaro.jpg";
import zanzibar from "../assets/images/zanzibar.jpeg";
import natron from "../assets/images/natron.jpg";
import tarangire from "../assets/images/tarangire.jpg";

const activities = [
  {
    name: "Safari Adventure",
    image: tarangire, 
    description: "Embark on an exciting safari and witness wildlife up close.",
    link: "/activities/safari",
    icon: "🦁"
  },
  {
    name: "Hiking Mount Kilimanjaro",
    image: kilimanjaro, 
    description: "Conquer Africa's tallest peak with a guided hiking tour.",
    link: "/activities/hiking-kilimanjaro",
    icon: "🥾"
  },
  {
    name: "Beach Relaxation in Zanzibar",
    image: zanzibar, 
    description: "Relax on pristine beaches with crystal-clear waters.",
    link: "/activities/zanzibar-beach",
    icon: "🏖️"
  },
  {
    name: "Cultural City Tour",
    image: ngorongoro, 
    description: "Explore local culture and heritage on a guided city tour.",
    link: "/activities/city-tour",
    icon: "🏙️"
  },
  {
    name: "Snorkeling in the Indian Ocean",
    image: natron, 
    description: "Dive into the crystal waters and explore vibrant marine life.",
    link: "/activities/snorkeling",
    icon: "🐠"
  },
  {
    name: "Hot Air Balloon Ride",
    image: serengeti, 
    description: "Soar above the savannah in a peaceful hot air balloon.",
    link: "/activities/balloon-ride",
    icon: "🎈"
  }
];

const Activities = () => {
  return (
    <div className="bg-[#f5f5f5] py-12 px-6 xl:h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-xl font-bold text-black mb-4 md:text-xl xl:text-3xl">Unforgettable Activities</h2>
        <p className="text-md md:text-lg xl:text-xl text-gray-600">From thrilling adventures to peaceful retreats.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={activity.image}
              alt={activity.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-xl font-semibold text-white">{activity.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{activity.description}</p>
              <div className="flex items-center text-white mt-2">
                <span className="mr-2">{activity.icon}</span> {/* Display the activity icon */}
                <a
                  href={activity.link}
                  className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full text-center hover:bg-green-700"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" relative h-24 text-center mt-12">
        <a
          href="/activities"
          className="bg-green-500 text-white px-10 py-3  absolute bottom-0 right-0.5  rounded-full text-sm md:text-md xl:text-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          See All Activities
        </a>
      </div>
    </div>
  );
}

export default Activities;
