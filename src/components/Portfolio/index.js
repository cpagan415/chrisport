import React, { useState } from 'react';
import '../../App.css';
import PhotoList from '../photolist';




function Portfolio(){

  /* setSelectedProject is passed down as a prop for the modal functionality */
  const [ projects ]  = useState([
    {
        name: 'Note Taker',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.'
    },
    {
        name: 'Weather Dashboard',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.'
    },
    {
        name: 'Work Day Scheduler',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.'
    },
    {
        name: 'Password Generator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.'
    },
    {
        name: 'Water Ways',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.'
    },
    {
        name: 'E-Commerce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.'
    },
    {
        name: 'Employee Tracker',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.'
    },
    {
        name: 'Tech Blog',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet. Massa tincidunt dui ut ornare lectus sit amet.'
    }
    
])
            const [selectedProject, setSelectedProject] = useState(projects[0]);
          

        return(
          <>
            <h3 className="portfolioH">Portfolio</h3> 
            <PhotoList
             projects={projects}
             selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}/>
            </>

    )
 
}

export default Portfolio;

