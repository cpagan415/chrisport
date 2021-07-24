import React, {useState}  from 'react';
import Navbar from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
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
            <Gallery />
            )}
            <Footer />
        </section>
    )
}

export default Home;
