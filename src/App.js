import React from 'react';
import './App.css';
import Header from './compoents/header/Header';
import Home from './compoents/home/Home';
import About from './compoents/about/About';
import Skills from './compoents/skills/Skills';
import Services from './compoents/services/Services';
import Qualification from './compoents/qualification/Qualification';
import Testimonials from './compoents/testimonials/Testimonials';
import Contact from './compoents/contact/Contact';
import Footer from './compoents/footer/Footer';

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
      <Testimonials />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
