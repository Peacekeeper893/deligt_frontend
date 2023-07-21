import { React, useState, useEffect } from 'react'
import Menu from './Menu';


const MenuSelector = () => {


    const links = {
        "bar" : "bg-[url('https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/01-1.jpg')]",
        "food" : "bg-[url('https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/food.png')]",
        "dessert" : "bg-[url('https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/Dessert.png')]",
    }


    const [cat, setCat] = useState("bar")
    const [currlink, setCurrLink] = useState(links[cat])


    function handleChange(event) {
        setCat(event.target.value)
    }

    useEffect(() => {
      
        setCurrLink(links[cat])
      
    }, [cat])
    



  return (
    <div className='min-h-[90vh] bg-primary text-white pb-5'>
    
      
          <div className={"flex flex-col justify-center bg-center bg-cover bg-no-repeat h-[90vh] w-full " + (currlink)}>
              
            <button value = "bar" className={`text-3xl p-6 font-bold md:font-normal md:pl-28 w-max text-left transform  duration-300 ease-linear ${("bar" === cat )? "text-golden underline underline-offset-8" : ""}  hover:scale-[1.123] `} onClick={handleChange}>Bar Menu</button>
            <button value = "food" className={`text-3xl font-bold md:font-normal p-6 md:pl-28 w-max text-left duration-300 ease-linear ${("food" === cat )? "text-golden underline underline-offset-8" : ""} hover:scale-[1.123]`} onClick={handleChange}>Food Menu</button>
            <button value = "dessert" className={`text-3xl font-bold md:font-normal p-6 md:pl-28 w-max text-left duration-300 ease-linear ${("dessert" === cat )? "text-golden underline underline-offset-8" : ""} hover:scale-[1.123]`} onClick={handleChange}>Dessert Menu</button>

              
          </div>

          <Menu selected = {cat} /> 
      
      
    </div>
  )
}

export default MenuSelector