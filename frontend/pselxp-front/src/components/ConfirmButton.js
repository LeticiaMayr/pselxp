import React from "react";
import { useProvider } from "../context/provider";

function ConfirmButton() {
  const { balance, setBalance, selectedService, value } = useProvider();

  function handleAccount() {
    if (typeof value === 'string' && value !== '') {
      if (selectedService === 'deposit') {
        const untreatedBalance = balance + parseFloat(value);
        const newBalance = Math.round(untreatedBalance * 100)/100;
        setBalance(newBalance);
      };
      if (selectedService === 'withdraw' && balance >= value) {
        const untreatedBalance = balance - parseFloat(value);
        const newBalance = Math.round(untreatedBalance * 100)/100;
        setBalance(newBalance);
      };
    };
    if (selectedService === 'withdraw' && balance < value) alert('Insira um valor adequado');
  }

  return (
    <button
      onClick={ handleAccount }
    >
      Confirmar
    </button>
  );
};

export default ConfirmButton;
