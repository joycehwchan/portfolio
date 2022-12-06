import React from 'react';
import './App.css';
import Header from './compoents/header/Header';
import Home from './compoents/home/Home';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
    </main>
    </>
  );
}

export default App;
