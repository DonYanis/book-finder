import React from "react";
import { useBooks } from "../contexts/BookContext";
import Book from "./Book";

export default function BookList(){

    const {books} = useBooks()
    const bookList = books.map(e=>{
        return (<Book title={e.title} author={e.author_name} year={Math.min(...e.publish_year)} 
                    lang={e.language} isbn={e.isbn} key={e.key} id={e.key}
                />)
    })
    
    return (
        <div className=" w-full flex flex-wrap items-start justify-center  dark:bg-[#1d2229]">
            {bookList}  
        </div>
    )
}