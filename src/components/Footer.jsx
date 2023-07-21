import React from 'react'
import spoon from '../assets/spoon.png'
import { RiInstagramFill, RiTwitterFill, RiFacebookFill } from 'react-icons/ri' 

import './css/footer.css'


const Footer = () => {
  return (
      <div className='min-h-screen bg-primary text-white flex flex-col pt-8'>
          <div className="flex border-golden w-4/5 mx-auto border-2 flex-col p-6">
              <p className='justify-around flex font-cormant text-3xl mb-6'>Newsletter</p>
              <p className='justify-center flex font-cormant md:text-7xl text-4xl text-golden mx-auto text-center'>Subscribe To Our Newsletter</p>
              <p className='justify-around flex font-cormant text-3xl my-2 text-center'>And Never Miss Latest Updates!</p>

              <div className='justify-center flex items-baseline mb-4'>
                  <input type="email" placeholder='Enter your email address' className='bg-black border-golden border-2 rounded-md w-1/2 mt-12 p-4 font-cormant' />
                  <button className='bg-amber-100 text-black p-4 ml-4 rounded-md '>Subscribe</button>
              </div>

          </div>
            
        <div className="flex mx-auto  mt-28 p-4  gap-16" id='info'>
        
          <div className=" mx-4 flex flex-col">
            <h1 className="font-cormant text-4xl mb-6 text-center">Contact Us</h1>
            <h1 className="font-poppins text-xl mb-2 text-center"><pre className=''>
                              Friedrichstraße 218<br/>
                              10969 Berlin-Kreuzberg<br/>
                              Germany
                            </pre></h1>
            <h1 className="font-poppins text-xl text-center">Phone: +49 30 2593661-0</h1>
          </div>


          <div className=" mx-4 flex flex-col"> 
            
            <div className='text-white font-bold font-playfair text-4xl tracking-widest mt-2 text-center'>DELÍGT</div>
            
            <h1 className="font-poppins text-xl my-4 text-center">
              "The Best Way To Find Yourself Is To<br/>
              Lose Yourself In The Service Of<br/>
              Others."
          </h1>
          
          <img src={spoon} alt="Welcome" className='w-10 mt-2 mx-auto' />
          <div className='mx-auto my-3 flex gap-2' ><a href='/'><RiFacebookFill size={['36px']} /></a>
            <a href='/'><RiInstagramFill size={['36px']} /></a>
            <a href='/'><RiTwitterFill size={['36px']} /></a>
          </div>

          
          </div>




          <div className=" mx-4 flex flex-col">
            <h1 className="font-cormant text-4xl mb-6 text-center">Working Hours</h1>
            <h1 className=" text-xl mb-2 text-center">Tuesday - Saturday: <br/>
              Starting at 6:30 pm</h1>
              <h1 className=" text-xl mb-2 text-center">Sunday - Monday: <br/>
              Closed</h1>
          </div>
        
      </div>
      
      <div className="mx-auto my-8 font-poppins text-center pl-8 "> &#169; DELÍGT 2015-2023 </div>

    </div>
  )
}

export default Footer