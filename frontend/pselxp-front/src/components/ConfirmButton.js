import React from "react";
import { useProvider } from "../context/provider";
import axios from "axios";

function ConfirmButton() {
  const { balance, selectedService, value, clientData, setClientData } = useProvider();

  function handleAccount() {
    if (selectedService === 'withdraw' && balance < value) alert('Insira um valor abaixo ou igual ao seu saldo!');
    if (value === '') alert('Insira algum valor para depósito ou saque!');
    if (value <= 0 && value !== '') alert('Insira algum valor maior que 0!');
    const { id } = clientData;
    if (typeof value === 'string' && value !== '') {
      if (selectedService === 'deposit') {
        const untreatedBalance = balance + parseFloat(value);
        const newBalance = Math.round(untreatedBalance * 100)/100;

        axios.put(`http://localhost:3009/account/${id}`, { newBalance })
        .then(res => {
          setClientData(res.data);
        }).catch(err => {
          console.log(err);
        });
      };
      if (selectedService === 'withdraw' && balance >= value) {
        const untreatedBalance = balance - parseFloat(value);
        const newBalance = Math.round(untreatedBalance * 100)/100;

        axios.put(`http://localhost:3009/account/${id}`, { newBalance })
        .then(res => {
          setClientData(res.data);
        }).catch(err => {
          console.log(err);
        });
      };
    };
  };

  return (
    <button
      onClick={ handleAccount }
    >
      Confirmar
    </button>
  );
};

export default ConfirmButton;
