import React from 'react';
import '../../App.css';
import Navbar from '../Nav';
import Footer from '../Footer';
import { motion } from 'framer-motion';



function About() {
    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn" }}
                exit={{
                    opacity: 0,
                    transition: {
                        ease: "easeOut"
                    }
                }}
                class="aboutContainer">
                <h1>About Me</h1>
                <motion.p
                    initial={{ x: -100 }}
                    animate={{ x: 0, transition: { ease: "easeIn", duration: 0.8 } }}
                    exit={{
                        x: 100,
                        transition: { duration: 0.5 }
                    }}
                    class="aboutP" id="about"> As a current Information Technology student as UCF. I am learning how to create
                    responsive web applications with Javascript, HTML, and CSS. This website was made
                    with React.js. I am looking forward to creating more web applications in the future. Please feel free
                    to take a look at the work I have done so far. </motion.p>
            </motion.div>
            <Footer />
        </>
    )
}

export default About;
