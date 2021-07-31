import React from 'react'
import '../../App.css';
import Navbar from '../Nav';
import Footer from '../Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion';

function Contact(){
    return (
        <>
          <Navbar />
          <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transtiion={{duration: 0.1}}
          exit={{opacity: 0, duration: 0.1}}
          className="formContainer">
          <h3 className="contactH3">Contact</h3>
          <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Button variant="dark" type="submit">
           Submit
          </Button>
          </Form>
          </motion.div>
          <Footer />
        </>
    )
}

export default Contact;