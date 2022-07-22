import React from "react";
import ClientBalance from './ClientBalance';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';

function Header() {
  const quotedUser = localStorage.getItem('lastUser')
  const lastUser = quotedUser.slice(1, quotedUser.length - 1); // Remove quotes from email required from local storage
  return (
    <Container className='d-flex text-bg-dark rounded'>
      <Col>
        <ClientBalance />
      </Col>
      <Col>
        Usuário: {lastUser}
      </Col>
    </Container>
  );
};

export default Header;
