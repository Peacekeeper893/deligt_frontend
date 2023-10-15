import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./css/navbar.css";
import { LoginTwoTone, LogoutRounded } from "@mui/icons-material";
import { RiProfileFill } from "react-icons/ri";
import { BsPersonFillCheck } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";




const Navbar = ({ loggedIn }) => {

  const navigate = useNavigate();



  const handleLogout = () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully");
        })
        .catch((error) => {
            // An error happened.
        });
};
    return (
        <div className="bg-primary flex justify-between p-5 items-center  w-full  text-white max-w-full">
            <Link to="/">
                <div className=" font-bold font-playfair md:text-4xl tracking-widest text-xl">
                    DELÍGT
                </div>
            </Link>

            <div className=" md:flex hidden" id="hamburger">
                <Link to="/">
                    <div className="mx-2 font-poppins">Home</div>
                </Link>
                <a href="#about_scroll">
                    <div className="mx-2 font-poppins">About</div>
                </a>
                <a href="#rootdiv">
                    <div className="mx-2 font-poppins">Menu</div>
                </a>
                <a href="#contact_scroll">
                    <div className="mx-2 font-poppins">Contact Us</div>
                </a>
            </div>

            <div className=" flex">
                {loggedIn && (
                    <Fragment>
                        <Link to="/store">
                            <div className="mx-2 hover:border-b-2 md:text-xl text-sm">
                                Online Store
                            </div>
                        </Link>
                        <div className="border-l-2 mx-1"></div>
                        <Link to="/booktable">
                            <div className="mx-2 hover:border-b-2 md:text-xl text-sm">
                                Book Table
                            </div>
                        </Link>
                    </Fragment>
                )}

                {!loggedIn ? (
                    <Link to="/login">
                        <div className="mx-4 hover:border-b-2 md:text-xl text-sm ">
                            LogIn
                        </div>
                    </Link>
                ) : (
                    <div onClick={handleLogout} className="hover:cursor-pointer ml-4"><LogoutRounded /></div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
