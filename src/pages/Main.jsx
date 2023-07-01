import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import {useTheme } from '../contexts/ThemeContext';

export default function Main(){

  const {darkTheme} = useTheme()
  
  return (
    <div className={darkTheme ? 'dark main' : 'main'}>
      <div className='dark:bg-[#1d2229] h-full'>
        <Header />
        <Outlet/>
      </div>
        
    </div>
  ) 
}