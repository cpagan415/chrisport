import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
       <Row style={{margin: '90px'}} >
        <Row xs={1} md={2} lg={2} xl={4} className="g-0" style={{width: '100%'}}>
        {projects.map((project, i) => (
             <Col>
            <Card style={{height: '20rem'}} className={`card-style ${selectedProject.name === project.name}`}
            key={project.name}>
                <Card.Img className="gridPhoto" src={`../../images/${i}.png`} alt=""></Card.Img>
            </Card>
            </Col>
         ))}
         </Row>
         </Row>
         </>
    )
}

export default PhotoList;