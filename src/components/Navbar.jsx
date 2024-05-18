import React, { useState } from "react";
import { navLink } from "../data/dummy";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
            <div>
                <img src={logo} alt="" className="w-full h-full object-contain"/>
            </div>
        <ul className="hidden md:flex">
            <li className="flex gap-5">
            {navLink.map((item)=>{
            return (
            <Link 
                to={item.id} 
                key={item.id} 
                className="hover:text-blue-500 text-sm md:text-md cursor-pointer"
                >
                {item.name}
            </Link>
            );
            })}
            </li>
        </ul>
        <div className="flex items-center">
        <button className="px-8 lg:px-6 bg-blue-600 outline-none hover:bg-blue-500 hover:text-white rounded">
            Sign Up
            </button>
            <AiOutlineMenu 
            className="text-2xl block md:hidden" 
            onClick={() => setNav((prev) => !prev)}
            />
        </div>
        <div 
        className={`${
            nav ? "right-0" : "-right-[100%]"
            } flex flex-col gap-4 pt-5 px-5 md:hidden absolute top-0 w-full h-screen bg-white`}
            >
        <AiOutlineClose 
            className="cursor-pointer text-2xl"
            onClick={() => setNav((prev) => !prev)}
            />
        <ul className="">
            <li className="flex gap-y-14 flex-col gap-5">
            {navLink.map((item)=>{
            return (
            <Link 
                to={item.id} 
                key={item.id} 
                className="hover:text-blue-500 text-sm md:text-md border-b cursor-pointer py-2">
                {item.name}
            </Link>
            );
            })}
            </li>
        </ul>
        </div>
        </div>
    )
}

export default Navbar