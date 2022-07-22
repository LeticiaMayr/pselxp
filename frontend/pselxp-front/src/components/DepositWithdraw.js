import React from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function DepositWithdraw() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate('/account');
  }
  return (
    <Button
      className='align-self-center justify-content-center text-bg-dark w-50'
      type='submit'
      onClick={ handleClick }
    >
      Deposito/Retirada
    </Button>
  );
};

export default DepositWithdraw;
