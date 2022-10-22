import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header></Header>
      <About id='about' />
      <Portfolio id='portfolio' />
      <Resume id='resume' />
      <Contact id='contact' />
      <Footer></Footer>
    </div>
    );
}

export default App;
