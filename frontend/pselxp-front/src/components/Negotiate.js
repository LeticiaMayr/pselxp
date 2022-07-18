import React from "react";
import { useNavigate } from 'react-router-dom';

function Negotiate() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate('/operations');
  }
  
  return (
    <button
      onClick={ handleClick }
    >
      <span>
        C/
      </span>
      <span>
        V
      </span>
    </button>
  );
};

export default Negotiate;
