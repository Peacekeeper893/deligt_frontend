import {React  ,useState  } from 'react'

import { BsPlusCircleFill , BsPatchMinusFill } from "react-icons/bs";

const AmountForm = (props) => {



  function handleClick(event) {

    setAmt(prev => (prev + 1))
  }

  function handleClickMinus(event) {

    setAmt(prev => (  prev> 0 ? prev - 1 : prev))
  }

  
  const [valid, setValid] = useState(true)
  const [amt, setAmt] = useState(0)

    function formSubmitHandler(event)
    {
      event.preventDefault();

      const enteredAmount = amt

      if ( enteredAmount < 1 || enteredAmount > 5) {

        setValid(false)

        const timer = setTimeout(() => {
          setValid(true)
        }, 1000);

        return ;

      }

      props.onAddToCart(amt);
      setAmt(0);


    }
  return (
      <form onSubmit={formSubmitHandler} className="flex flex-col justify-center items-center">

      <div className="flex">
        {(amt>0) && <button type='button' className="px-1 rounded-full  mx-2"><BsPatchMinusFill style={{ width: "30px" , height:"30px" , color : "black"}} onClick = {handleClickMinus} /></button>}
        {(amt > 0) && <div className='bg-primary text-golden p-2 rounded-full'>{amt}</div>}
        <button type='button' className="px-1 rounded-full  mx-2"><BsPlusCircleFill style={{ width: "30px" , height:"30px" , color : "black"}} onClick = {handleClick} /></button>
      </div>
      <div ><button className='px-4 bg-primary text-golden mt-3 rounded-lg  font-poppins  font-semibold py-2 '>Add to cart</button></div>
      {!valid && <p>Please enter a valid Amount</p>}
    </form>
  )
}

export default AmountForm