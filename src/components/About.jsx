import React from 'react'

import knife from '../assets/knife.png'
import spoon from '../assets/spoon.png'

import './css/about.css'


const About = () => {
  return (
      <div className='min-h-screen bg-primary flex justify-center text-white p-4   max-w-full gap-16 md:flex-row flex-col' id='about_scroll'>
          <div className=' self-center flex flex-col md:basis-1/3' >
              <h1 className='text-7xl  text-golden leading-tight font-cormant'>About Us</h1>
              <img src={spoon} alt="Welcome" className='w-10 mb-4' />

              <p className='text-justify font-poppins'>An evening at DeLigt is a step out of the ordinary. The experience is distinguished by more than just the products we select. No cameras are allowed inside. Our guests are encouraged to uncouple from daily life and the concerns of the  world. For the duration of the meal, the focus remains solely on a taste of the region.</p>
          </div>
          <img src={knife} alt="" className='max-h-screen md:mx-6 sm:w-[80px] md:w-auto mx-auto rotate-45 w-[50px] md:rotate-0' id='knife'/>
          <div className=' self-center flex flex-col md:basis-1/3'>
              <h1 className='text-7xl  text-golden leading-tight font-cormant'>Our History</h1>
            <img src={spoon} alt="Welcome" className='w-10 mb-4' />

              <p className='text-justify font-poppins'>DeLigt has been “vocally local” from the start. Since first opening our doors in February 2015, we have grown fearlessly into our current role as Germany’s most political restaurant. This involves a conscious decision to shift the focus squarely onto the people, all from the greater Berlin region, who produce our raw ingredients.</p>
          </div>

      </div>
  )
}

export default About