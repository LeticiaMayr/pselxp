import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function BackButton() {
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <Button
      onClick={ handleClick }
    >
      Voltar
    </Button>
  );
};

export default BackButton;
