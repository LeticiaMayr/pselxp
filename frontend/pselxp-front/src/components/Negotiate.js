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
  
  return (
    <button
      onClick={ handleClick }
    >
      <span className='text-center'>
        C
      </span>
      <span className=' text-center ps-3'>
        V
      </span>
    </button>
  );
};

export default Negotiate;
