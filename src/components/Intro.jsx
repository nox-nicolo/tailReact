// eslint-disable-next-line no-unused-vars
import React from 'react';

const Intro = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 h-full md:px-12  flex flex-col justify-between min-h-screen">
      {/* Section 1: Welcome to DigitalDreamSafari */}
      <section className="text-center mb-12 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-10 mt-5 xl:text-3xl">Welcome to <span className='text-green-900'>DigitalDreamSafari</span>  Your Gateway to Unforgettable Adventures</h2>
        <p className="text-lg text-gray-600 max-w-7xl mx-auto xl:text-xl">
          At <strong>DigitalDreamSafari</strong>, we believe that travel is more than just a journey  it’s an experience that should be filled with wonder, excitement, and memories to last a lifetime. Based in Arusha, Tanzania, we specialize in crafting custom travel experiences that showcase the very best of Africa’s natural beauty, culture, and adventure.
        </p>
        <p className="text-lg text-gray-600 max-w-7xl mx-auto mt-10 xl:text-xl">
          Whether you&apos;re seeking the thrill of a safari, the serenity of Tanzania’s stunning landscapes, or a deep dive into its rich cultural heritage, we have something perfect for you.
        </p>
      </section>

      {/* Section 2: Why Choose DigitalDreamSafari? */}
      <section className="mb-12 flex-grow">
        <h3 className="text-lg font-semibold text-center text-gray-800 mb-8 xl:text-2xl">Why Choose DigitalDreamSafari?</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg shadow-stone-600 hover:shadow-green-900 text-center">
            <h4 className="text-lg font-bold text-gray-800 mb-4 xl:text-xl">Expert Local Guides</h4>
            <p className="text-gray-600 xl:text-lg">
              Our team of passionate, experienced guides knows every corner of Tanzania. With their knowledge and dedication, you’ll get more than just a tour – you’ll embark on a journey filled with insider stories, local traditions, and hidden gems.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg shadow-stone-600 hover:shadow-green-900 text-center">
            <h4 className="text-lg font-bold text-gray-800 mb-4 xl:text-xl">Tailored Travel Experiences</h4>
            <p className="text-gray-600 xl:text-lg">
              No two travelers are the same, and neither should be your trip. We offer fully customized tours designed to suit your interests, whether you&apos;re looking for an adrenaline-pumping safari or a peaceful retreat amidst nature’s wonders.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg shadow-stone-600 hover:shadow-green-900 text-center">
            <h4 className="text-lg font-bold text-gray-800 mb-4 xl:text-xl">Sustainable and Responsible Travel</h4>
            <p className="text-gray-600 xl:text-lg">
              We’re deeply committed to preserving Tanzania’s landscapes and wildlife. With us, you’ll explore the beauty of the Serengeti, Ngorongoro, and beyond with eco-conscious practices that ensure these treasures remain for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Ready for Your Next Adventure? */}
      <section className="text-center flex-grow">
        <h3 className="text-1xl font-semibold text-gray-800 mb-6 xl:text-4xl">Ready for Your Next Adventure?</h3>
        <p className="text-lg text-gray-600 max-w-1xl mx-auto mb-6 xl:text-xl">
          At DigitalDreamSafari, we don’t just take you on tours  we offer you an immersive journey where every moment is designed to make you feel connected to Tanzania’s heart and soul. From awe-inspiring wildlife encounters to cultural experiences that open your eyes to the beauty of this land, our mission is to make every journey unforgettable.
        </p>
        <button className="bg-green-500 text-white px-10 py-2 rounded-full text-lg font-semibold hover:bg-green-900 transition duration-300 md:text-md xl:text-lg mt-10">
          Learn More About Us
        </button>
      </section>
    </div>
  );
}

export default Intro;
