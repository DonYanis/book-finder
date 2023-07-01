import React from 'react';

import Search from '../components/Search';
import Loading from '../components/Loading';
import {useBooks} from '../contexts/BookContext'
import BookList from '../components/BookList';

export default function Home(){
  const {loading, books} = useBooks()
  return (
    <div className='home flex flex-col items-center justify-center  w-full  dark:bg-[#1d2229]'>
      <Search/>
      {loading && <Loading/> }
      {!loading && books && <BookList/>}
      
    </div>
        
  ) 
}