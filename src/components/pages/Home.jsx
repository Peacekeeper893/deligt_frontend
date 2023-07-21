import React from 'react'

import Hero from '../Hero';
import About from '../About';
import Menu from '../Menu';
import ChefsWord from '../ChefsWord';
import Video from '../Video';
import Contact from '../Contact';


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <ChefsWord />
      <Video />
      <Contact />
    </div>
  )
}

export default Home