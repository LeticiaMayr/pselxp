import React from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom'

function Stocks() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate('/account');
  }

  return (
    <>
      <Header />
      <div>
        ações
      </div>
      <button
        type='submit'
        onClick={ handleClick }
      >
        Deposito/Retirada
      </button>
    </>
  );
};

export default Stocks;
