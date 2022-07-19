import React from "react";
import { useProvider } from "../context/provider";
import axios from "axios";

function ConfirmButton() {
  const { balance, setBalance, selectedService, value, clientData } = useProvider();

  function handleAccount() {
    const { id } = clientData;
    if (typeof value === 'string' && value !== '') {
      if (selectedService === 'deposit') {
        const untreatedBalance = balance + parseFloat(value);
        const newBalance = Math.round(untreatedBalance * 100)/100;

        axios.put(`http://localhost:3009/account/${id}`, { newBalance })
        .then(res => {
          setBalance(res.data.newBalance);
        }).catch(err => {
          console.log(err);
        });
      };
      if (selectedService === 'withdraw' && balance >= value) {
        const untreatedBalance = balance - parseFloat(value);
        const newBalance = Math.round(untreatedBalance * 100)/100;

        axios.put(`http://localhost:3009/account/${id}`, { newBalance })
        .then(res => {
          setBalance(res.data.newBalance);
        }).catch(err => {
          console.log(err);
        });
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
