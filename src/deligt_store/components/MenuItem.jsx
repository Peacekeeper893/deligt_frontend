import { React, useContext } from "react";
import AmountForm from "./AmountForm";
import CartContext from "../store/cart-context";

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);
  

  const hasItems = cartCtx.items.length > 0;
  const cartItems = cartCtx.items;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        });
    };

    return (
        <div
            key={props.id}
            className="py-5 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-zinc-300 via-neutral-200 to-neutral-500 text-black rounded-xl p-6 my-4 flex flex-col md:flex-row justify-between md:gap-16 gap-4"
        >
            <div className="flex-[80%]">
                <p className="md:text-3xl text-xl text-opacity-100 font-bold">
                    {props.name}
                </p>
                <p className="my-2 md:text-md text-sm max-w-[1000px] text-justify ">
                    {props.description}
                </p>
                <p className="font-semibold">{`$${props.price.toFixed(2)}`}</p>
            </div>

            <div>
                <AmountForm onAddToCart={addToCartHandler} id={props.id} />
            </div>
        </div>
    );
};

export default MenuItem;
