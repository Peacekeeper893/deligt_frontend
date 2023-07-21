import React from "react";
import { BiCaretRight } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="min-h-[100vh] bg-primary text-white pb-5">
      <div className="h-[30rem] bg-[url('https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/redux/banner.png')] bg-center bg-cover p-4 bg-no-repeat flex flex-col justify-center bg-opacity-10 ">
        <div className="flex justify-center md:text-7xl text-golden font-cormant   text-3xl mb-1">
          STORE
        </div>
        <div className="flex justify-center md:text-2xl text-white font-cormant  font-semibold text-3xl items-center mt-2">
          HOME <BiCaretRight />
          STORE
        </div>
      </div>

      <div className="justify-center flex items-center mt-20 ml-8 text-5xl text-golden font-cormant font-bold" >Explore our excellent cuisine at home!</div>
    </div>
  );
};

export default Hero;
