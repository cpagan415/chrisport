import React, { useState } from 'react';
import '../../App.css';
import PhotoList from '../photolist';
import ModalFunc from '../Modal';


function Portfolio(){

  const [selectedProject, setSelectedProject] = useState();
  /* setSelectedProject is passed down as a prop for the modal functionality */


        return(
          <>
            <h1 class="portfolioH1">Portfolio</h1>
            <div class="portfolioContainer">
            {selectedProject && <ModalFunc selectedProject={selectedProject} setSelectedProject={setSelectedProject}/> }
            <PhotoList setSelectedProject={setSelectedProject} />
            </div>
          </>
    )
 
}

export default Portfolio;

