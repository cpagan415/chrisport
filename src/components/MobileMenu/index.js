import React from 'react';
import { motion } from 'framer-motion';

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
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            </ul>
        </motion.div>
    )
}

export default MobileMenu
