import React from "react";
import logo from "../images/logo.svg"
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
export default function Header(){
  const {darkTheme, toggleTheme} = useTheme()
  
  return (
    <Link to='/'  className=" header w-full h-[80px] z-10 px-[10px] md:px-[50px] flex items-center fixed top-0 bg-yellow-50  dark:bg-[#171b20] ">
      <nav className="flex items-center justify-between w-full">
        <div className="logo flex items-center justify-center">
          <img src={logo} alt="logo" className="w-[70px]" />
          <h1 className="logo-text text-slate-600 dark:text-slate-200 text-[20px] md:text-[30px]">BookFinder</h1>
        </div>
        <div className="items flex items-center justify-between">
          <span className="text-slate-600 px-[10px] dark:text-slate-200 text-[15px] md:text-[20px]">Dark Mode</span>
          <div onClick={toggleTheme} className="theme-btn w-[50px] h-[20px] bg-slate-200 dark:bg-slate-600 flex items-center 
            border border-slate-400 rounded-[15px] relative">
            <div className={`h-[18px] w-[18px] rounded-full bg-slate-100 border
             border-slate-400 absolute transition-all ease-linear ${darkTheme ? "left-[30px]" : "left-0"}`}></div>
          </div>
        </div>
      </nav>
    </Link>
  )
}