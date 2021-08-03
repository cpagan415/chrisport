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
        type: 'Javascript',
        description: 'This was a project done with a team of four amazing web developers in UCF Web Dev Bootcamp where we imagined we were tasked to created a website for a water vehicle rental company. Water Ways is an online marketplace that connects people who want to rent out thier boats or pesonal watercraft with people who are looking for the perfect boat for their next adventure.',
        url: 'https://waterwaysrentals.herokuapp.com/',
        GitRepo: 'https://github.com/justpuzey/water-sports-xchange'
    },
    {
        name: 'E-Commerce',
        type: 'JavaScript, MySQL, Sequelize',
        description: 'Challenge with UCF WebDev Bootcamp where we imaged we were building a backend for an e-commerce website where we took a working Express.js API and configured it to use Sequelize to interact with a MySQL database.',
        url: 'https://github.com/cpagan415/ecommerce-ORM',
        GitRepo: 'https://github.com/cpagan415/ecommerce-ORM'
    },
    {
        name: 'Employee Tracker',
        type: 'Node.js, Inquirer, MySQL',
        description: 'A coding challenge done with UCF WebDev Bootcamp where I created a backend for a content management system with Inquirer and MySQl.',
        url: 'https://github.com/cpagan415/employee-management-system',
        GitRepo: 'https://github.com/cpagan415/employee-management-system'
    },
    {
        name: 'Tech Blog',
        type: 'JavaScript',
        description: 'A tech blog web application currently in progess.',
        url: 'https://github.com/cpagan415/techblog',
        GitRepo: 'https://github.com/cpagan415/techblog'
    }
    
])
            const [selectedProject, setSelectedProject] = useState(projects[0]);
          
            
        return(
          <>
          <Navbar />
          <motion.div className="portfolioContainer"
          exit={{opacity: 0,
          transition: {duration: 0.3}}}>
          <h3 className="portfolioH">Portfolio</h3>
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

