import React from 'react'
import '../../App.css';
import { BsX } from "react-icons/bs";

function Modal({onClose, currentInfo}){

  const {name, description, index} = currentInfo;

    return (
        <>
        <div className="modalBg"  onClick={onClose}>
        //<BsX className="closeSymbol" onClick={onClose}></BsX>
        <div className="modalContainer">
          <img className="modalPhoto" src={`../../images/${index}.png`} alt="current category" />
          <h3 className="modalTitle">{name}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
      </>
    )
}

export default Modal
