import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetails(){
  const {id} = useParams()
  const [bookData, setBookData] = useState(null)
  const [author, setAuthor] = useState(null)

  const list = id.split('+')
  const olid = list[0]
  const isbn = list.length === 2 ? list[1] : null

  useEffect(()=>{
    fetch(`https://openlibrary.org/works/${olid}.json`)
      .then(res=>res.json()
      .then(data=> setBookData(data)))
      .then(()=>{
        const aid = bookData ? bookData.authors[0].author.key : ''
        if (aid)
        fetch(`https://openlibrary.org${aid}.json`)
          .then(res=>res.json()
          .then(data=> setAuthor(data.personal_name)))
          .catch(error=>console.log(error))
      }).catch(error=>console.log(error))
    },[olid,bookData])
    

  if(bookData && author){
    return (
      <div className='flex items-center justify-around flex-wrap-reverse pt-9'>
          <div className="info dark:text-white flex flex-col items-start justify-center w-full md:w-[50%]">
            <p >Title : {bookData.title} </p>
            <p>Date : {bookData.first_publish_date} </p>
            <p>Authors :  {author}</p>
            <p>Subjects : {bookData.subjects}</p>
            <p>Description : {bookData.description ? bookData.description.value : 'none'}</p>
            <a href={`https://openlibrary.org/works/${olid}`} className='text-red-500 hover:text-red-900'>Read</a>
          </div>
          <img src={`https://covers.openlibrary.org/b/isbn/${isbn ? isbn : ''}-L.jpg`} alt="" 
            className='w-[300px]'/>
      </div>
    ) 
  }
}