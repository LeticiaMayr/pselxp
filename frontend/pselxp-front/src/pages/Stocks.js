import React, { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom'
import { useProvider } from "../context/provider";
import axios from "axios";

function Stocks() {
  const navigate = useNavigate();

  const {
    stockList, setStockList
   } = useProvider()

  useEffect(() => {
    axios.get('http://localhost:3009/stocks')
    .then(res => {
      setStockList(res.data);
    }).catch(err => {
      console.log(err);
    })
  });

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
