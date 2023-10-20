import { React, useEffect, useState } from "react";
// import AmountForm from "./AmountForm";

import Card from "../UI/Card";
import MenuItem from "./MenuItem";
import { CarCrashRounded, ErrorSharp } from "@mui/icons-material";

const Menu = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let getData = async () => {
            const url = `https://deligtbackend.pythonanywhere.com/api/${
                props.selected === "bar" ? "drinks" : props.selected
            }`;

            let response = await fetch(url);
            let data = await response.json();
            setItems(data);
        };

        getData();
    }, [props.selected]);

    return (
        <Card>
            <div className={`flex flex-col py-2 md:px-2 min-h-[40vh] ${items.length === 0 ? "justify-center" : "justify-start"}`}>

                {items.length === 0 ? (<div className="text-center text-3xl justify-center font-lobster items-center gap-2 flex"> <CarCrashRounded/> <p> Oh Snap! Something went wrong! </p></div>) : 
                items.map((meal) => (
                    <MenuItem
                        key={`${props.selected}-${meal.id}`}
                        id={`${props.selected}-${meal.id}`}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                    />
                ))}
            </div>
        </Card>
    );
};

export default Menu;
