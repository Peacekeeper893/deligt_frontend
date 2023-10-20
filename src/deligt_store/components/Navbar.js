import React from "react";
import Button from "../UI/CartButton";
import { Link } from "react-router-dom";
import {  ArrowBackRounded } from "@mui/icons-material";

const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="bg-primary  flex justify-between px-6 items-baseline py-6 fixed w-full">
                <div className="flex items-center gap-6">
                    <Link to="/">
                        <div className=" font-poppins text-white  md:text-2xl">
                            <ArrowBackRounded titleAccess="Go Back" />
                        </div>
                    </Link>
                    <Link to="/store">
                        <p className="font-playfair font-semibold md:text-2xl text-golden md:w-auto w-32 ">
                            DELÍGT ONLINE STORE
                        </p>
                    </Link>
                </div>
                <Button onClick={props.onClick}>Contained</Button>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
