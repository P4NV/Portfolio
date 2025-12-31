import { useState } from 'react';
import './App.css';

import Head from './components/head.jsx';
import Cardbuttons from './components/Cardbuttons.jsx';

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
      <div className='button-wrapper'>
        <div className='button-container'>
          <Cardbuttons title="Projects" description="my projects"/>
          <Cardbuttons title="About me" description="my Life"/>
          <Cardbuttons title="Experience" description="Somesome"/>
          <Cardbuttons title="Projects" description="my projects"/>
        </div>
      </div>
      </div>
    </>
  )}

export default App
