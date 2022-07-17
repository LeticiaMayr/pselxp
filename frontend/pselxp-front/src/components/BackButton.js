import React from "react";
import { useNavigate } from 'react-router-dom';

function BackButton() {
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <button
      onClick={ handleClick }
    >
      Voltar
    </button>
  );
};

export default BackButton;
