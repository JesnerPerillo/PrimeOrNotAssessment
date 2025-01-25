import React, { useState } from "react";
import './index.css';
import GIFBackground from './Components/background.gif';
import Header from './Components/Header.jsx';
import Information from './Components/Information.jsx';

export default function App() {
  return(
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${GIFBackground})`, // Set the background image
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div>
        <Header />
      </div>

      <div className="mt-72">
        <Information />
      </div>
    </div>
  )
}
