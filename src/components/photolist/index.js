import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {motion} from 'framer-motion';


//passed prop from Portfolio to the Photolist for Modal Functionality 
const PhotoList = (props) =>
{
    const 
    {
        projects = [],
        selectedProject,
        setSelectedProject
    } = props;


    return(
        <>
        <Container className="mt-5 mb-5">
        <Row xs={1} s={2} md={2} lg={3} xl={4} className="g-2" style={{width: '100%'}}>
        {projects.map((project, i) => (
             <Col>
             <motion.div
            initial={{opacity: 0}}
            animate={{opacity: [0,1]}}
            transition={{ duration: 0.9, delay: i/7}}
            >
            <Card border="light" style={{height: '15rem'}} className={`text-center card-style ${selectedProject.name === project.name}`}
            key={project.name}>
                <Card.Img className="gridPhoto" src={`../../images/${i}.png`} alt=""></Card.Img>
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