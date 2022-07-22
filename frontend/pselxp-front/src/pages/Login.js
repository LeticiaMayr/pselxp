import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProvider } from '../context/provider';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const { setClientData, setStockList } = useProvider();

  const quotedUser = localStorage.getItem('lastUser');
  const lastUser = quotedUser?.slice(1, quotedUser.length - 1); // Remove quotes from email required from local storage

  const [emailInput, setEmailInput] = useState(lastUser? lastUser : ''); // Added ternary so that on first use there's no change on type from undefined to string
  const [passwordInput, setPasswordInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const MIN_PASSWORD_LENGTH = 6;
    const emailRegex = /\S+@\S+\.com/;

    if (emailRegex.test(emailInput) && passwordInput.length >= MIN_PASSWORD_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailInput, passwordInput]);

  function handleChange({ target }) {
    if (target.id === 'email') {
      setEmailInput(target.value);
    }
    if (target.id === 'password') {
      setPasswordInput(target.value);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(emailInput, passwordInput);
    const now = new Date(); // Check a better way to store date later
    localStorage.setItem('loginDateAndHour', JSON.stringify(now));
    localStorage.setItem('lastUser', JSON.stringify(emailInput));
    axios.get(`http://localhost:3009/clients/${emailInput}`)
      .then(res => {
        setClientData(res.data);
      }).catch(err => {
        console.log(err);
    });
    axios.get('http://localhost:3009/stocks')
      .then(res => {
        setStockList(res.data);
      }).catch(err => {
        console.log(err);
    });
    navigate('/stocks');
  }

  return (
    <Container>
      <Form className='d-flex align-items-center min-vh-100'>
        <Col>
          <Row className='mb-3'>
            <input
              id='email'
              type='email'
              value={ emailInput }
              onChange={ handleChange }
              placeholder='E-mail'
              />
          </Row>
          <Row className='mb-5 rounded'>
            <input
              id='password'
              type='password'
              value={ passwordInput }
              onChange={ handleChange }
              placeholder='Senha'
            />
          </Row>
          <Row className='d-flex justify-content-center mb-3 rounded'>
            <Button
              className='d-flex align-self-center justify-content-center text-bg-dark w-50'
              type='submit'
              disabled={ isDisabled }
              onClick={ handleClick }
              >
              Acessar
            </Button>
          </Row>
        </Col>
      </Form>
    </Container>
  );
};

export default Login;
