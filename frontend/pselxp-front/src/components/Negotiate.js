import React from "react";
import { useNavigate } from 'react-router-dom';
import { useProvider } from "../context/provider";

function Negotiate(props) {
  const { available, ticker, value, clientStock, id } = props;
  const navigate = useNavigate();

  const { setWantedStock } = useProvider();

  function handleClick(event) {
    event.preventDefault();
    setWantedStock({
      id: id,
      available: available,
      ticker: ticker,
      value: value,
      clientStock: clientStock
    });
    navigate('/operations');
  }

  const sellColor = clientStock ? 'text-bg-primary ' : '';
  
  return (
    <button
      className='rounded'
      onClick={ handleClick }
    >
      <span className='text-bg-success text-center p-1 rounded-circle'>
        C
      </span>
      <span className={`${sellColor}text-center p-1 rounded-circle`}>
        V
      </span>
    </button>
  );
};

export default Negotiate;
