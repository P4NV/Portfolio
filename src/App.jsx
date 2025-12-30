import { useState } from 'react';
import './App.css';

import Head from './components/head.jsx';
import Cards from './components/card.jsx';

function App() {

  return (
    <>
      <div className='background'>  
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className='content-container'>
        <Head />
        <div className='card-container'>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      </div>
    </>
  )}

export default App
