// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email to server
    alert(`Thank you for subscribing with ${email}`);
    setEmail(''); 
  };

  return (
    <div
      className="bg-cover bg-center py-12 px-6 text-center min-h-screen text-white"
      style={{
        backgroundImage: 'url("/src/assets/images/natron.jpg")', 
      }}
    >
      <div className="mt-[55%] md:mt-[30%] xl:mt-[16%] bg-black w-full bg-opacity-50 py-5 px-5 rounded-xl"> 
        <h2 className="text-lg font-bold mt-5 mb-5 md:text-lg xl:text-2xl">Stay Updated with Our Latest Adventures!</h2>
        <p className="text-md mb-6 md:text-lg lg:text-md xl:text-lg">Sign up for exclusive offers, travel tips, and news.</p>

        <form onSubmit={handleSubmit} className="max-w mx-auto md:max-w-sm xl:max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 mb-4 rounded-md text-black md:text-md xl:text-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-900 md:text-md xl:text-lg"
          >
            Subscribe Now
          </button>
        </form>

        <p className="mt-4 text-md text-gray-300 md:text-xl xl:text-md">
          We respect your privacy. No spam, just travel news.
        </p>
      </div>
    </div>
  );
}

export default NewsLetter;

