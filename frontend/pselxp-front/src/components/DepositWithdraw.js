import React from "react";
import { useNavigate } from 'react-router-dom'

function DepositWithdraw() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate('/account');
  }
  return (
    <button
      type='submit'
      onClick={ handleClick }
    >
      Deposito/Retirada
    </button>
  );
};

export default DepositWithdraw;
