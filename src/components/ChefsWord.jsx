import React from 'react'

import chefimg from '../assets/chef.png'
import spoon from '../assets/spoon.png'
import quote from '../assets/quote.png'
import signature from '../assets/sign.png'


const ChefsWord = () => {
  return (
      <div className='min-h-screen bg-primary  md:py-24 md:px-32 p-8 gap-24 text-white'>
      
          <div className="flex md:flex-row flex-col">
              
              <div className="md:basis-1/2 ">
                  <img src={chefimg} alt="" className='md:w-4/5'/>
              </div>
              <div className="basis-1/2 items-end md:pl-12 py-8" >
                  
                  <div className='flex flex-col  '>
                      <h1 className='text-2xl font-cormant '>Chef's Word</h1>
                        <img src={spoon} alt="Welcome" className='w-10 mb-3' />

                      <h1 className='md:text-5xl text-4xl font-bold font-cormant text-golden mb-12'>What We Believe In </h1>

                      
                        <div className="mb-12">
                          <img src={quote} alt="" className='w-9 inline-flex content-end' />
                          At DeLigt, we believe in several core values that guide our actions and decisions every day. These beliefs are at the heart of everything we do, and they shape the way we approach our work, our customers, and each other. 
                        </div>
                      
                      <h1 className='text-4xl font-semibold  font-cormant text-golden'>Kevin Luo</h1>
                      <h1 className='text-2xl  font-cormant '>Chef & Founder</h1>

                      <img src={signature} alt="" className='w-2/5 mt-12' />

                  </div>
              </div>
          </div>
          
      </div>
  )
}

export default ChefsWord