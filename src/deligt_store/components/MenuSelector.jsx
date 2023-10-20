import { React, useState, useEffect } from "react";
import Menu from "./Menu";

const MenuSelector = () => {
    const links = {
        bar: "bg-[url('https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/01-1.jpg')]",
        food: "bg-[url('https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/food.png')]",
        dessert:
            "bg-[url('https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/Dessert.png')]",
        appetizers:
            "bg-[url('https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwZXRpemVyfGVufDB8fDB8fHww&w=1000&q=80')]",
        steaks: "bg-[url('https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
        chefs: "bg-[url('https://images.unsplash.com/photo-1576237934915-c716cf54b24d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]",
    };

    const [cat, setCat] = useState("bar");
    const [currlink, setCurrLink] = useState(links[cat]);

    function handleChange(event) {
        setCat(event.target.value);
    }

    useEffect(() => {
        setCurrLink(links[cat]);
    }, [cat]);

    return (
        <div className="min-h-[90vh] bg-primary text-white py-1">
            <div
                className={
                    "flex flex-col justify-center bg-center bg-cover bg-no-repeat min-h-[90vh] w-full gap-6 " +
                    currlink
                }
            >
                <div className="   ml-8 text-5xl text-golden font-playfair pt-4 -mt-16 pb-8">
                    Bon Appétit
                </div>

                <div className="flex flex-col md:flex-row justify-between md:px-24">
                    <div className="flex flex-col ">
                        <button
                            value="bar"
                            className={`text-3xl p-6 font-bold md:font-normal  w-max text-center  duration-300 ease-linear ${
                                "bar" === cat
                                    ? "text-golden underline underline-offset-8"
                                    : ""
                            }  hover:scale-[1.123] `}
                            onClick={handleChange}
                        >
                            Bar Menu
                        </button>
                        <button
                            value="food"
                            className={`text-3xl font-bold md:font-normal p-6  w-max text-center duration-300 ease-linear ${
                                "food" === cat
                                    ? "text-golden underline underline-offset-8"
                                    : ""
                            } hover:scale-[1.123]`}
                            onClick={handleChange}
                        >
                            Quick Bites
                        </button>
                        <button
                            value="dessert"
                            className={`text-3xl font-bold md:font-normal p-6 w-max text-center duration-300 ease-linear ${
                                "dessert" === cat
                                    ? "text-golden underline underline-offset-8"
                                    : ""
                            } hover:scale-[1.123]`}
                            onClick={handleChange}
                        >
                            Dessert Menu
                        </button>
                    </div>

                    <div className="flex flex-col ">
                        <button
                            value="appetizers"
                            className={`text-3xl p-6 font-bold md:font-normal  w-max text-center  duration-300 ease-linear ${
                                "appetizers" === cat
                                    ? "text-golden underline underline-offset-8"
                                    : ""
                            }  hover:scale-[1.123] `}
                            onClick={handleChange}
                        >
                            Appetizer Menu
                        </button>
                        <button
                            value="chefs"
                            className={`text-3xl font-bold md:font-normal p-6  w-max text-left duration-300 ease-linear ${
                                "chefs" === cat
                                    ? "text-golden underline underline-offset-8"
                                    : ""
                            } hover:scale-[1.123]`}
                            onClick={handleChange}
                        >
                            Chef's Recommended
                        </button>
                        <button
                            value="steaks"
                            className={`text-3xl font-bold md:font-normal p-6  w-max text-left duration-300 ease-linear ${
                                "steaks" === cat
                                    ? "text-golden underline underline-offset-8"
                                    : ""
                            } hover:scale-[1.123]`}
                            onClick={handleChange}
                        >
                            Steaks Menu
                        </button>
                    </div>
                </div>
            </div>

            <Menu selected={cat} />
        </div>
    );
};

export default MenuSelector;
