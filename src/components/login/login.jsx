import React from 'react'
import NavBar from '../../layouts/navBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='navBar-space'>
        <NavBar login='login'/>
      </div>
      <Form className='login-form-container'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <br/>
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
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )
}

export default Login;
