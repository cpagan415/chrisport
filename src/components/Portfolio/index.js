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
        name: 'I Am Bored',
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
    }
    
])
            const [selectedProject, setSelectedProject] = useState(projects[0]);
        return(
          <>
            <div className="portfolioContainer">
            <h1 className="portfolioH1">Portfolio</h1>
            <p className="portfolioP">This is a collection of projects I have done during my time at UCF's  Web Dev Bootcamp. I look forward to 
            expanding this gallery in the future as I continue to learn new web development technologies. </p>
            </div>
            <PhotoList
             projects={projects}
             selectedProject={selectedProject}
             setSelectedProject={setSelectedProject}/>
          </>

    )
 
}

export default Portfolio;

