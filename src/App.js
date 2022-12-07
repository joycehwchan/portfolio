import React from 'react';
import './App.css';
import Header from './compoents/header/Header';
import Home from './compoents/home/Home';
import About from './compoents/about/About';
import Skills from './compoents/skills/Skills';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
    </main>
    </>
  );
}

export default App;
