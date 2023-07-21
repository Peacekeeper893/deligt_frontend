import { React, useContext, Fragment } from "react";



import { RiCloseFill } from "react-icons/ri";

import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const BackDrop = (props) => {
  return (
    <div
      className="w-full h-screen bg-neutral-800 opacity-[0.8] fixed  z-20 "
      onClick={props.toHide}
    ></div>
  );
};

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };

    const cartAddHandler = (item) => {
      cartCtx.addItem({...item , amount: 1});
    };

  const cartItems = (
    <ul>
          {cartCtx.items.map((item) => (
              <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
                  onRemove={ cartRemoveHandler.bind(null , item.id)}  onAdd ={cartAddHandler.bind(null , item)}
              />
      ))}
    </ul>
  );

  const handleOrder = () => {
    alert("Your order has been placed. Thank you for choosing us.")

    window.location.reload()
  }

  return (
    <Fragment>
      <BackDrop toHide={props.toHide} />
          <div className="fixed left-12 top-6 flex flex-col p-5  z-30 bg-primary text-white h-[93%] w-[93%] rounded-xl">
              
        <div className="flex justify-between ">
          <h1 className="text-3xl font-semibold text-center mb-4 items-baseline">Your Cart</h1>
          <h1 className="text-3xl font-semibold  text-center  items-baseline"><RiCloseFill onClick={props.toHide} className="hover:scale-110"/></h1>
        </div>
              {cartCtx.items.length !== 0 && <div className="max-h-[24rem] overflow-y-auto">{cartItems}</div>}
              {cartCtx.items.length === 0 && <div className="flex items-center justify-center">	&#128532;You don't have any items in the cart</div>}
              <div className="mt-auto">
                  <div className="flex justify-between ">
                      <div className="flex items-center font-bold text-3xl">Total Amount</div>
                        <div>{totalAmount}</div>
                  </div>
              {hasItems && <div className="flex justify-center"><button className="p-3 px-28  bg-red-400 rounded-xl" onClick={handleOrder}>Order</button></div>}
                  
              </div>
        
      </div>
    </Fragment>
  );
};

export default Cart;
