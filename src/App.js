import React, {useState}  from 'react';
import Navbar from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';


function App() {
    
  const [portSelected, setPortSelected] = useState(false);
  return (
    <>
            <Navbar
              portSelected={portSelected}
              setPortSelected={setPortSelected} />
            {!portSelected ? (
                <>
             <Hero />
            <About />
            </>
            ) : (
            <Portfolio />
            )}
            <Footer />
            </>
  );
}

export default App;
