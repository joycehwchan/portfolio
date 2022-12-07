import React from 'react';
import './App.css';
import Header from './compoents/header/Header';
import Home from './compoents/home/Home';
import About from './compoents/about/About';
import Skills from './compoents/skills/Skills';
import Services from './compoents/services/Services';
import Qualification from './compoents/qualification/Qualification';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
    </main>
    </>
  );
}

export default App;
