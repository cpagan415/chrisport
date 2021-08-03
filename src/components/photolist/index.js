import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import {motion, AnimatePresence} from 'framer-motion';
import Modal from '../Modal';






//passed prop from Portfolio to the Photolist for Modal Functionality 
const PhotoList = (props) =>
{


    const 
    {
        projects = [],
        selectedProject
    } = props;


    const [selectedCard, setSelectedCard] = useState(false);
    const [currentInfo, setCurrentInfo] = useState();
    
   const info = (project, i) =>
    {
        setCurrentInfo({...project, index: i});
         setSelectedCard(!selectedCard);
    }
   

    return(
        
        <>
        <AnimatePresence>
        {selectedCard && <Modal currentInfo={currentInfo} onClose={info}/>}
        </AnimatePresence>
        <Container className="m-5">
        <Row xs={1} s={2} md={2} lg={2} xl={3} className="g-3 gridRow" style={{width: '100%'}}>
        {projects.map((project, i) => (
             <Col >
             <motion.div
            initial={{opacity: 0}}
            animate={{opacity: [0,1]}}
            transition={{ duration: 0.5, delay: i/7 }}
            >
            <Card border="light" style={{height: '15rem', width: '20rem'}} className={`text-center card-style ${selectedProject.name === project.name}`}
            key={project.name}>
                <Card.Img className="gridPhoto"
                 src={require(`../../images/${i}.png`).default} 
                alt={`${project.name}`} key={project.name}></Card.Img>
                <Card.ImgOverlay className="imgOverlay">
                <Card.Title className="overlayTitle">{project.name}</Card.Title>
                    <Button variant="dark"className="overlayDescription" onClick={()=>info(project, i)}>Learn More</Button>
                    </Card.ImgOverlay>
            </Card>
            </motion.div>
            </Col>
         ))}
         </Row>
         </Container>
         </>
    )
}

export default PhotoList;


