import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./css/navbar.css";
import { LoginTwoTone, LogoutRounded } from "@mui/icons-material";
import { RiProfileFill } from "react-icons/ri";
import { BsPersonFillCheck } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";




const Navbar = ({ loggedIn , hp }) => {

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
        <div className={`bg-primary flex justify-between p-5 items-center  w-full  text-white max-w-full ${hp && "md:sticky top-0 "}z-0`}>
            <Link to="/">
                <div className=" font-bold font-playfair md:text-4xl tracking-widest text-xl">
                    DELÍGT
                </div>
            </Link>

            {hp && <div className=" md:flex hidden" id="hamburger">
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
            </div>}

            <div className=" flex">
                {loggedIn && (
                    <Fragment>
                        <Link to="/store">
                            <div className="mx-2  md:text-xl text-sm hover:text-golden hover:scale-105">
                                Online Store
                            </div>
                        </Link>
                        <div className="border-l-2 mx-1"></div>
                        <Link to="/booktable">
                            <div className="mx-2  md:text-xl text-sm hover:text-golden hover:scale-105">
                                Book Table
                            </div>
                        </Link>
                    </Fragment>
                )}

                {!loggedIn ? (
                    <Link to="/login">
                        <div className="mx-4 hover:scale-105 md:text-xl text-sm font-cormant bg-golden py-2 px-3 rounded-xl text-black font-semibold hover:font-bold">
                            Login
                        </div>
                    </Link>
                ) : (
                    <div onClick={handleLogout} className="hover:cursor-pointer ml-4 hover:text-golden " ><LogoutRounded titleAccess="Logout" /></div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
