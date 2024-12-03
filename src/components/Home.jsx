// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Intro from './Intro';
import Destinations from './Destinations';
import Activities from './Activity';
import News from './News'
import Faq from './Faq';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Intro />
        <Destinations />
        <Activities />
        <News />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home