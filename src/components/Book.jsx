import React from "react";
import { Link } from "react-router-dom";
export default function Book({title,author,year,id,lang,isbn}){
  const link = id.split('/')
  return (
    <Link to={`/books/${link[link.length-1]}${isbn ? '+'+isbn[0] : ''}`} className="book w-[190px] h-[290px] mx-3 my-2 p-1 rounded-[5px] hover:scale-110 transition-all ease-linear cursor-pointer dark:text-white">
        <img src={`https://covers.openlibrary.org/b/isbn/${isbn ? isbn[0] : ''}-L.jpg`} alt="cover"
          className="w-[120px] h-[160px] m-auto rounded-md" />
        <h1 className="text-[13px] mt-2">{`${title} ,${year}`}</h1>
        <h2 className="text-[13px]">{`By ${author}`}</h2>
        <h2 className="text-[13px]">{`language : ${lang}`}</h2>
    </Link>
  )
}