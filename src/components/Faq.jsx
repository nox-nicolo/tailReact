// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if clicked again
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  const faqs = [
    {
      question: "What should I bring for a tour?",
      answer: "For our tours, we recommend bringing comfortable shoes, sunscreen, a hat, a camera, and any personal items you'll need for the day. Don't forget your sense of adventure!"
    },
    {
      question: "How do I book a tour?",
      answer: "You can easily book a tour through our website by selecting the destination and activity you're interested in. Alternatively, you can contact us directly via email or phone."
    },
    {
      question: "Are your tours family-friendly?",
      answer: "Yes, our tours are designed to accommodate all age groups! We offer family-friendly options that are safe and enjoyable for children and adults alike."
    },
    {
      question: "Can I customize my tour itinerary?",
      answer: "Absolutely! We offer customized itineraries tailored to your interests. Just reach out to us, and we’ll work with you to create the perfect adventure."
    },
    {
      question: "What happens if it rains on the day of my tour?",
      answer: "If weather conditions are not ideal, we will offer alternative activities or reschedule the tour at no extra charge, ensuring you still have a great experience."
    }
  ];

  return (
    <div className="bg-[#f7f7f7] py-12 px-6 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold mb-4 md:text-xl xl:text-5xl">Frequently Asked Questions</h2>
      <p className="text-lg mb-8 text-gray-700 xl:text-xl">Have questions? We have answers.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:text-md xl:text-lg max-w-6xl mx-auto">
        {/* FAQ List */}
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-3 px-6 bg-white rounded-lg shadow-md text-black font-semibold hover:bg-gray-200 focus:outline-none"
            >
              {faq.question}
            </button>

            {activeIndex === index && (
              <div className="bg-white p-4 rounded-lg shadow-md mt-2 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-24 xl:mt-32">
        <a
          href="/faq"
          className="bg-green-700 text-white px-6 py-2 rounded-full text-sm md:text-md md:py-4 md:px-10 xl:text-lg xl:py-4 xl:px-20 font-semibold hover:bg-green-900 transition duration-300"
        >
          See More FAQs
        </a>
      </div>
    </div>
  );
};

export default FAQ;
