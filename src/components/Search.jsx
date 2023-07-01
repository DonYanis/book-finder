import React from "react";
import searchLoop from "../images/search.svg"
import { useBooks } from "../contexts/BookContext";

export default function Search(){
  const {handleChange, handleSearch} = useBooks()
  return (
    <section className="w-full flex flex-col items-center justify-center h-[300px] dark:bg-[#1d2229]">
        <h1 className="search mb-[50px] text-[30px] md:text-[50px] text-center dark:text-white">Find Your Book Of Choice With One Click</h1>
        <div className="search-input flex felx-row items-center justify-between w-[70%] md:w-[50%] h-[50px]  rounded-2xl">
            <input type="text" placeholder="Enter Key Words " onChange={handleChange} className=" w-[90%] h-full rounded-2xl pl-2 dark:bg-transparent dark:text-white" />
            <img src={searchLoop} alt="search" onClick={handleSearch} className="w-[40px] pr-1  cursor-pointer"/>
        </div>
    </section>
  )
}