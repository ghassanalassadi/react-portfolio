import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, handlePageChange] = useState('about');

  const loadPage = () => {
    switch (currentPage) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
  }
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      <main>
        {loadPage()}
      </main>
      <Footer></Footer>
    </div>
    );
}

export default App;
