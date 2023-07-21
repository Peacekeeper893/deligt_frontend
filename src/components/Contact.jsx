import React from 'react'
import pic from '../assets/findus.png'
import spoon from '../assets/spoon.png'

import './css/contact.css'


const Contact = () => {
  return (
    <div className='min-h-screen bg-primary  md:py-24 md:px-28 px-4 py-8 gap-24 text-white' id='contact_scroll'>
      
    <div className="flex" id='mainel'>
        
        
        <div className="basis-1/2 items-end md:px-12 py-8" >
            
            <div className='flex flex-col  '>
                <h1 className='text-2xl font-cormant'>Contact</h1>
                  <img src={spoon} alt="Welcome" className='w-10 mb-3' />

                <h1 className='text-7xl font-bold font-cormant text-golden mb-6'>Find Us </h1>

                
                      <div className="mb-6">
                          <p className='text-left md:text-justify md:text-4xl text-sm font-poppins' id='address'>
                            Friedrichstraße 218<br/>
                            10969 Berlin-Kreuzberg<br/>
                            Germany
                          </p>

                  </div>
                
                <h1 className='text-4xl font-semibold  font-cormant text-golden mb-4'>Opening Hours</h1>
                <h1 className='md:text-2xl  font-cormant text-sm '>Open Tuesday through Saturday starting at 6:30pm <br/>

                Closed Sundays and Mondays</h1>
                      

                <div className="font-cormant text-2xl my-6"> <a href='https://goo.gl/maps/oiucwTSztBLFfkwg8' target={'_blank'}><button className='bg-amber-100 text-black p-3 rounded-md '>Visit Us</button></a></div>
                

            </div>
              </div>
              
              <div className="basis-1/2 md:pl-8">
            <img src={pic} alt="" className='w-4/5'/>
        </div>
    </div>
    
</div>
  )
}

export default Contact