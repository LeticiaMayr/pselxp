import React, { useEffect } from 'react';
import { useProvider } from '../context/provider';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import ConfirmButton from '../components/ConfirmButton';
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

function Account() {

  const {
    clientData,
    balance,
    value, setValue,
    selectedService, setSelectedService
   } = useProvider()

   useEffect(() => {}, [clientData]);

  function handleChange({ target }) {
    setValue(target.value);
  }

  const showService = selectedService === 'deposit' ? 'Depósito' : 'Retirada';
  const toSum = selectedService === 'deposit' ? parseFloat(value).toFixed(2) : - parseFloat(value).toFixed(2);

  return (
    <>
      <Header/>
      <Container>
        <Form className='d-flex align-items-center min-vh-100'>
          <Col>
            <Row className='text-bg-dark mb-3'>
              <p>Serviço escolhido: {showService}</p>
              {isNaN(toSum) ? null : <p>Saldo pós transação: {parseFloat(balance) + parseFloat(toSum)}</p>}
            </Row>
            <Row>
              <Col className='d-flex justify-content-center rounded'>
                <Button
                  id='deposit'
                  onClick={ () => setSelectedService('deposit') }
                >
                  Depositar
                </Button>
              </Col>
              <Col className='d-flex justify-content-center rounded'>
                <Button
                  id='withdraw'
                  onClick={ () => setSelectedService('withdraw') }
                  >
                  Retirada
                </Button>
              </Col>
            </Row>
            <Row className='mt-3 mb-3'>
              <input
                className='rounded'
                type='number'
                placeholder='Informe o valor'
                step={0.01}
                onChange={ handleChange }
                value={ value }
              />
            </Row>
            <Row>
              <Col className='d-flex justify-content-center mb-3 rounded'>
                <BackButton />
              </Col>
              <Col className='d-flex justify-content-center mb-3 rounded'>
                <ConfirmButton />
              </Col>
            </Row>
          </Col>
        </Form>
      </Container>
    </>
  );
};

export default Account;
