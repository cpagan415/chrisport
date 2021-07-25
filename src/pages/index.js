import React, {useState}  from 'react';
import Navbar from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

function Home() {

    const [portSelected, setPortSelected] = useState(false);

    return (
      <section>
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
        </section>
    )
}

export default Home;
