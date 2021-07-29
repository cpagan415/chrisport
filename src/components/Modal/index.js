import React from 'react'

function Modal({onClose, currentInfo}){

  const {name, description, index} = currentInfo;

    return (


        <>

        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img className="modalPhoto" src={`../../images/${index}.png`} alt="current category" />
          <p>
            {description}
          </p>
          <button type="button" onClick={onClose}>
            Close this modal
          </button>
        </div>
      </div>
      </>
    )
}

export default Modal
