import React from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom'
import StockList from "../components/StockList";
import ClientStockList from "../components/ClientStockList";

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
      <div>
        Minhas ações:
      </div>
      <ClientStockList />
      <div>
        Disponíveis para investir:
      </div>
      <StockList />
    </>
  );
};

export default Stocks;
