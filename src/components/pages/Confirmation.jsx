// Confirmation??.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


const Confirmation = () => {

    const bookingInfo = useLocation();
    // console.log(bookingInfo.state.cartitems.length)
  const { width, height } = useWindowSize()
  
  window.scrollTo(0,0)
  return (
      <div className="bg-primary min-h-screen flex flex-col justify-center items-center">
          
          <Confetti
      width={width-20}
              height={height}
              numberOfPieces={80}
              wind={0.01}
              className='-z-10'
              initialVelocityY={8}
    />
          
          <div className="absolute top-32 text-golden text-3xl text-center font-lobster p-4"> Thank You for Choosing DELÍGT. We will reach out to you shortly.  </div>
          
      <div className="bg-white rounded-lg py-8 px-16 shadow-lg max-w-xl w-full ">
        <h1 className="text-4xl font-semibold mb-8">Booking Confirmation</h1>

        <div className="grid grid-cols-2 gap-6 text-lg">
          <div className="text-gray-700">
            <p className="text-xl font-semibold">Name</p>
            <p>{bookingInfo.state?.name}</p>
          </div>
          <div className="text-gray-700">
            <p className="text-xl font-semibold">Date</p>
            <p>{bookingInfo.state?.date}</p>
          </div>
          <div className="text-gray-700">
            <p className="text-xl font-semibold">Time</p>
            <p>{bookingInfo.state?.time}</p>
          </div>
          <div className="text-gray-700">
            <p className="text-xl font-semibold">Party Size</p>
            <p>{bookingInfo.state?.partySize}</p>
          </div>
        </div>

        <Link
          to="/"
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
