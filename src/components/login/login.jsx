import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import NavBar from '../../layouts/navBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import { login } from '../../redux/actions';

const initialState = {
  email: '',
  password: ''
}

const Login = () => {

const [input, setInput] = useState(initialState);
const [error, setError] = useState(initialState);
const [status, setStatus] = useState(0);
const dispatch = useDispatch();



  function handleInputChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const validateInput = function (e) {
    let { name } = e.target;
    
    if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
        setError({ ...error, [name]: "Mail incorrecto" });
      } else {
        setError({ ...error, [name]: "" });
      }
    }
    if (name === "password") {
      if (e.target.value.length < 6) {
        setError({ ...error, [name]: "Minimo seis caracteres" });
      } else {
        setError({ ...error, [name]: "" });
      }
    }
  }

  const clearForm = function () {
    setInput(initialState);
  };

  function handleSubmit(e){
    e.preventDefault();
    if(input.email.length > 2 || input.password.length > 5){
      dispatch(login(input))
      .then(response => {
        console.log(response, 'q hay en response?')
        setStatus(response.status)
      })
      .catch(err => {
        console.error(err)
        setStatus(err)
      })
    }
    clearForm();
  }





  return (
    <div className='login-container'>
      <div className='login-navBar-space'>
        <NavBar login='login'/>
      </div>
      <Form className='login-form-container'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <div className='div-title'>
      <h1>Ingresar</h1>
    </div>
    <br/>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' onChange={e => {
      handleInputChange(e)
      validateInput(e)
    }} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' onChange={e => {
      handleInputChange(e)
      validateInput(e)
    }} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default Login;
