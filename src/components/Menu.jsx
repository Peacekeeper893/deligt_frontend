import React from 'react'

import menu from '../assets/menu.png'
import spoon from '../assets/spoon.png'

import data from '../constants/data'

import MenuItem from './MenuItem'

import './css/Menu.css'


const Menu = () => {
  return (
      <div className='min-h-screen bg-primary flex flex-col justify-start text-white pt-8 ' id='rootdiv'>
          

          <div className="flex justify-around font-cormant text-2xl">Menu That Fits Your Palatte</div>
          <div className="flex justify-around "> <img src={spoon} alt="Welcome" className='w-10 mt-2' /></div>
          <div className="flex justify-around font-cormant text-8xl my-4 text-golden font-bold" id='heading'>Today's Special</div>

          <div className="flex justify-center max-w-full gap-8 w-full" id='mainel'>
              
              <div className="flex flex-col basis-1/3 justify-start pt-8">
                  <p className='flex justify-around font-cormant text-4xl mb-12'>Wine & Beer</p>

                  <div className="flex flex-col justify-around  p-8">
                      

                      
                      {data.wines.map((wine) => (<MenuItem title = {wine.title} price = {wine.price} tags = {wine.tags} />))}
                      


                  </div>


              </div>


              <div className="vodka">
                  <img src={menu} alt="vodka" className='max-h-screen' />
              </div>


              <div className="flex flex-col basis-1/3 justify-start pt-8">
                  <p className='flex justify-around font-cormant text-4xl mb-8 '>Cocktails</p>

                  <div className="flex flex-col justify-around  p-8">
                      

                      
                      {data.cocktails.map((wine) => (<MenuItem title = {wine.title} price = {wine.price} tags = {wine.tags} />))}
                      


                  </div>




              </div>
              


          </div>

          <div className="flex justify-around font-cormant text-2xl my-12"><button className='bg-amber-100 text-black p-3 rounded-md '>View More</button></div>



    </div>
  )
}

export default Menu