import React from 'react';
import '../../App.css';

//Look at Portfolio about what is being passed
//selectedProject is the photo being clicked on in the Portfolio


const ModalFunc = ({selectedProject, setSelectedProject}) => {

    function handleClick(event)
   {
       setSelectedProject(null);
   }


    return (
        <div className="modalBackdrop" onClick={handleClick}>
        <div className="modalContainer">
        <img id="modalImg"src={selectedProject}alt="project picture here"/>
        <h3 className="modalTitle">Photo Name</h3>
        <p id="modalP"> Photo Description </p>
        </div>
         </div>
    )
}

export default ModalFunc;
