// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';   // for slick-carouse sliding show
import { FaArrowRight } from 'react-icons/fa';
import image1 from '../assets/images/mt kilimanjaro.jpg'; 
import image2 from '../assets/images/serengeti.jpeg'; 
import image3 from '../assets/images/zanzibar.jpeg'; 

const Hero = () => {
  // Settings for the react-slick carousel
  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Adjust the speed of autoplay if necessary
    arrows: false,  // Remove next/previous buttons
  };

  return (
    <div className="m-auto relative max-w-full -z-50">
      {/* Hero Section */}
      <Slider {...settings}>
        {/* Slide 1 - Mount Kilimanjaro */}
        <div className="relative h-screen w-full">
          <img
            src={image1}
            alt="Mount Kilimanjaro"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute top-2/4 w-full transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-8 md:px-18 left-1/2 xl:text-6xl">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h1 className="text-xl md:text-3xl xl:text-3xl font-extrabold">Reach New Heights at Mount Kilimanjaro</h1>
              <p className="mt-4 text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl">
                Stand tall at the world&apos;s tallest free-standing mountain. Embark on an unforgettable trek through diverse landscapes and take in the breathtaking views as you conquer the majestic Kilimanjaro summit.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-block bg-green-500 px-8 py-3 rounded-full text-sm font-bold hover:bg-green-600 transition duration-300 md:text-md lg:text-lg xl:text-xl"
              >
                Start Your Adventure <FaArrowRight className="inline ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Slide 2 - Serengeti National Park */}
        <div className="relative h-screen w-full">
          <img
            src={image2}
            alt="Serengeti"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute top-2/4 w-full transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-8 md:px-18 left-1/2">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h1 className="text-xl md:text-3xl xl:text-3xl font-extrabold">Explore the Wonders of Serengeti</h1>
              <p className="mt-4 text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl">
                Experience nature like never before in one of the world’s most famous wildlife reserves. Witness the Great Migration, where millions of wildebeest and zebras move across vast plains – a spectacle of nature you’ll never forget.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-block bg-green-500 px-8 py-3 rounded-full text-sm font-bold hover:bg-green-600 transition duration-300 md:text-md lg:text-lg xl:text-xl"
              >
                Book Your Safari <FaArrowRight className="inline ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Slide 3 - Zanzibar */}
        <div className="relative h-screen w-full">
          <img
            src={image3}
            alt="Zanzibar"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute top-2/4 w-full transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-8 md:px-18 left-1/2">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h1 className="text-xl md:text-3xl xl:text-3xl font-extrabold">Discover Zanzibar: A Tropical Paradise</h1>
              <p className="mt-4 text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl">
                Immerse yourself in the beauty of white sandy beaches, crystal-clear waters, and vibrant culture. Zanzibar offers the perfect blend of relaxation and adventure. Come experience the exotic charm of this island gem.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-block bg-green-500 px-8 py-3 rounded-full text-sm font-bold hover:bg-green-600 transition duration-300 md:text-md lg:text-lg xl:text-xl"
              >
                Book Your Escape <FaArrowRight className="inline ml-2" />
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;


