import React from 'react';
import projectPhotos from './gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';


//passed prop from Portfolio to the Photolist for Modal Functionality 
const PhotoList = ({setSelectedProject}) =>
{

    const projects = [
        {
            name: 'Note Taker',
            description: 'Description on Note Taker'
        },
        {
            name: 'Weather Dashboard',
            description: 'Description on Note Taker'
        },
        {
            name: 'Work Day Scheduler',
            description: 'Description on Note Taker'
        },
        {
            name: 'Password Genertor',
            description: 'Description on Note Taker'
        },
        {
            name: 'Note Taker',
            description: 'Description on Note Taker'
        },
        {
            name: 'Note Taker',
            description: 'Description on Note Taker'
        },
        {
            name: 'Note Taker',
            description: 'Description on Note Taker'
        }
    ]


    

    return(
        <>
        <Container fluid>
        <Row>
            <Col sm={8} md={2} lg={4}>
            {projectPhotos.map((index) => (
                <img 
                src={index} 
                key={index}
                //onClick pases the value of the project image for the Modal
                onClick={() => setSelectedProject(index)} />
            ))}
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default PhotoList;