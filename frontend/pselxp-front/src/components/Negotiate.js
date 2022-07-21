import React from "react";
import { useNavigate } from 'react-router-dom';
import { useProvider } from "../context/provider";

function Negotiate(props) {
  const { available, ticker, value, clientStock } = props;
  const navigate = useNavigate();

  const { setWantedStock } = useProvider()

  function handleClick(event) {
    event.preventDefault();
    setWantedStock({
      available: available,
      ticker: ticker,
      value: value,
      clientStock: clientStock
    });
    navigate('/operations');
  }
  
  return (
    <button
      onClick={ handleClick }
    >
      <span>
        C
      </span>
      {clientStock ? <span>/V</span> : null}
    </button>
  );
};

export default Negotiate;
