import React from 'react'
import '../../App.css';
import {motion} from 'framer-motion';

function Modal({onClose, currentInfo}){

  const {name, description, url, index} = currentInfo;

    return (
        <>
        <motion.div className="modalBg"  
        onClick={onClose}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <motion.div 
        initial={{x: 0}}
        animate={{ x: -100 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="modalContainer">
          <div>
          <a onClick={() => window.open(url)}>
            <img className="modalPhoto" src={`../../images/${index}.png`} alt="current category" />
            </a>
          <h3 className="modalTitle">{name}</h3>
          </div>
          <div>
          <p className="modalP">
            {description}
          </p>
          </div>
        </motion.div>
      </motion.div>
      </>
    )
}

export default Modal
