import React from 'react'
import Slide from '../assets/slide.jpeg';
import "../style/service.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Service() {
  return (
    <div className='container-fluid'><div className='row'>
      <div className='col-lg-6 col-md-6 col-12'style={{ backgroundImage: `url(${Slide})`}} id="slide"> </div>
      <div className='col-lg-6 col-md-6 col-12'><h1>Contact us</h1>
      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="btn sign-in" type="submit">
        Submit
      </Button>
    </Form>
    </div>
      </div></div>
  )
}

export default Service