import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    return (
        <motion.div className="mobileMenuContainer"
        initial={{opacity: 0, y: "-60"}}
        animate={{opacity: 1, y: 0, transition: {duration: 0.5}}}
        exit={{ opacity: 0,
        y: -60,
        transition: {duration: 0.5}
            }}
        >
            <ul className="mobileMenu">
            <li><Link to='/about' style={{color: 'white'}} className="menuLink">About Me</Link></li>
            <li><Link to='/portfolio'  style={{color: 'white'}} className="menuLink">Portfolio</Link></li>
            <li><Link to='/contact'  style={{color: 'white'}} className="menuLink">Contact</Link></li>
            </ul>
        </motion.div>
    )
}

export default MobileMenu
