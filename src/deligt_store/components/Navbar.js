import React from 'react'
import Button from '../UI/CartButton'
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
      <React.Fragment>
          
        <nav className='bg-primary  flex justify-between px-6 items-baseline py-6 fixed w-full'>
        <Link to="/store"><p className='font-playfair font-semibold md:text-2xl text-golden pt-2 md:w-auto w-32 '> DELÍGT ONLINE STORE </p></Link>
        <Link to="/"><div className=' font-poppins text-white md:text-xl md:pr-36 hidden md:block'>Home</div> </Link>
        <Button onClick = {props.onClick}>Contained</Button>
              
      </nav>
         
    </React.Fragment>
  )
}

export default Navbar