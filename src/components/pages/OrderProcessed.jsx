import React from "react";
import { useLocation } from "react-router-dom";
import CartItem from "../../deligt_store/components/CartItem";
import { Link } from "react-router-dom";
import success from "../../assets/success.webp";

import classes from '../../deligt_store/components/CartItem.module.css';


const OrderProcessed = () => {
    const orderInfo = useLocation();
  // console.log(orderInfo.state.cartitems)
    console.log(orderInfo);
  window.scrollTo(0,0)
    

    const cartitems = orderInfo.state.cartitems;

    const cartItems = (
        <ul>
            {cartitems.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    isCart={false}
                />
            ))}
        </ul>
    );

    // console.log(orderInfo)
    return (
        <div className="bg-primary min-h-screen text-white p-8 pb-8">
            <div className=" top-32 text-golden text-3xl text-center font-lobster p-4 ">
                
                Thank You for Choosing DELÍGT. We will reach out to you shortly.
            </div>

            <div>
                <img src={success} alt="" className="w-full h-[50vh]" />
            </div>

            <div className="text-golden text-3xl text-left  px-2 my-8 font-playfair font-bold">
                
                Your Order Details
            </div>

            <div className="min-h-[40vh]">{cartItems}</div>

            <div className="mt-8">
                <div className="flex justify-between ">
                    <div className="flex items-center font-bold text-3xl">
                        Total Amount
                    </div>
                    <div className={classes.price}>${orderInfo.state.totalAmount}</div>
                </div>
            </div>

            <div className="flex justify-center">
                <Link
                    to="/"
                    className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg inline-block "
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default OrderProcessed;
