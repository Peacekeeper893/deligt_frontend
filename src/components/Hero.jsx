import React from 'react'
import welcome from '../assets/welcome.png'
import spoon from '../assets/spoon.png'

import './css/hero.css'
const Hero = () => {
  return (
      <div className='min-h-screen bg-primary flex justify-between md:p-24 p-6 pt-20 gap-24' id='mainel'>
      
          <div className="basis-1/2 text-white flex flex-col">
            <div><p className='font-poppins text-2xl'>Chase The New Flavour</p></div>
            <img src={spoon} alt="Welcome" className='w-10 mt-2' />
        
              <div><p className='md:text-8xl text-6xl my-8 text-golden leading-tight font-cormant font-bold'>The Key To Fine Dining</p></div>
              <div><p className='mt-4 font-poppins md:text-2xl text-xl mb-3'>Putting Local Food Back in Your Hands! </p></div>
              <div><p className='mt-1 font-poppins md:text-m md:text-justify text-sm'>There’s more at play here than just culinary aesthetics. Serving this philosophy also intrinsically means promoting environmental and economic sustainability for the people working with the bountiful nature in and around Berlin. It also involves pride in a sense of place and embracing the identity that comes with that. Eating is inherently a political act, even if too few understand it as such.  </p></div>
          </div>
          <div className="basis-1/2 ">
              <img src={welcome} alt="Welcome" className='' />
          </div>
          
      
    </div>

    

  )
}

export default Hero