import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main'
import Home from './pages/Home'
import BookDetails from './pages/BookDetails';
import Error from './pages/Error';

import { ThemeProvider } from './contexts/ThemeContext';
import { BookProvider } from './contexts/BookContext';

export default function App(){
  
  return (
    <ThemeProvider>
      <BookProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>}>
              <Route index element={<Home/>}/>
              <Route path='/books/:id' element={<BookDetails/>}/>
              <Route path='*' element={<Error/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
      </BookProvider>
    </ThemeProvider>
  ) 
}