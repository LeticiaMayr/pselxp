import React from "react";
import ClientBalance from './ClientBalance';
import { Container, Col } from 'react-bootstrap';
import { useProvider } from "../context/provider";

function Header() {
  const { clientData } = useProvider();
  const user = clientData.user;

  return (
    <Container className='d-flex text-bg-dark rounded mb-3'>
      <Col>
        <ClientBalance />
      </Col>
      <Col className='text-end'>
        Usuário: {user}
      </Col>
    </Container>
  );
};

export default Header;
