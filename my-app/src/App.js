import React, { useState, useEffect } from 'react';

import Header from './component/Header';
import TopBar from "./component/TopBar";


import Home from './pages/Home';
import './App.css';


function App() {

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        // You can adjust the scroll threshold as needed
        if (scrollTop > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <>
      <div className={`header-part top-sticky-part ${isScrolled ? 'scrolled' : ''}`}>
        <TopBar />
        <Header />
      </div>
      <Home />
    </>
  );
}

export default App;
