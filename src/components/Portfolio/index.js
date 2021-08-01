import React, { useState } from 'react';
import '../../App.css';
import PhotoList from '../photolist';
import Navbar from '../Nav';
import Footer from '../Footer';
import {motion} from 'framer-motion';




function Portfolio(){

  /* setSelectedProject is passed down as a prop for the modal functionality */
  const [ projects ]  = useState([
    {
        name: 'Note Taker' ,
        type: 'Javascript, Express.js',
        description: 'This was a coding challenge done with UCF WebDev Bootcamp. The coding challenge was to finish the creation of a Note Taker web application where a user can write notes, save notes, and delete notes. The challenege was to create an Express.js back end that would retrieve note data from a JSON file. Click below to see the full application.',
        url: 'https://maple-moose-24100.herokuapp.com/',
        GitRepo: 'https://github.com/cpagan415/noteTaker'
    },
    {
        name: 'Weather Dashboard',
        type: 'JavaScript',
        description: "This weather application uses a OpenWeather One Call API to give a 7-day forecast on weather conditions in cities around the world. Local storage holds a user's recently searched cities.",
        url: 'https://cpagan415.github.io/weather-dashboard/',
        GitRepo: 'https://github.com/cpagan415/weather-dashboard'
    },
    {
        name: 'Work Day Scheduler',
        type: 'HTML & CSS, jQuery',
        description: 'Currently in development, this coding challenge is a simple calendar application that allows the user to save events each hour of the day with dynamic HTML CSS & jQuery.',
        url:'https://cpagan415.github.io/workday-scheduler/',
        GitRepo: 'https://cpagan415.github.io/workday-scheduler/'
    },
    {
        name: 'Password Generator',
        type: 'JavaScript',
        description: 'This coding challenge through UCF Bootcamp is a password generator that uses JavaScript functionalities to generate random passwords for a user based on desired requirements.',
        url: 'https://cpagan415.github.io/password-generator/',
        GitRepo: 'https://github.com/cpagan415/password-generator'
    },
    {
        name: 'Water Ways',
        type: 'Type here',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.',
        url: 'https://waterwaysrentals.herokuapp.com/',
        GitRepo: 'GitRepo'
    },
    {
        name: 'E-Commerce',
        type: 'Type here',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.',
        url: 'https://github.com/cpagan415/ecommerce-ORM',
        GitRepo: 'GitRepo'
    },
    {
        name: 'Employee Tracker',
        type: 'Type here',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.',
        url: 'https://github.com/cpagan415/employee-management-system',
        GitRepo: 'GitRepo'
    },
    {
        name: 'Tech Blog',
        type: 'Type here',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.',
        url: 'https://github.com/cpagan415/techblog',
        GitRepo: 'GitRepo'
    }
    
])
            const [selectedProject, setSelectedProject] = useState(projects[0]);
          
            
        return(
          <>
          <Navbar />
          <motion.div
          exit={{opacity: 0,
          transition: {duration: 0.3}}}>
          <h3>Portfolio</h3>
            <PhotoList
             projects={projects}
             selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}/>
            </motion.div>
        <Footer />
            </>

    )
 
}

export default Portfolio;

