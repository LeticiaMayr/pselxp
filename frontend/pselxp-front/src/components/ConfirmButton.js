import React from "react";
import { useProvider } from "../context/provider";
import axios from "axios";
import swal from "sweetalert";

function ConfirmButton() {
  const { balance, selectedService, value, clientData, setClientData } = useProvider();

  function handleAccount() {
    if (selectedService === 'withdraw' && balance < value) {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Insira algum valor menor ou igual que seu saldo!',
      });
    };

    if (value === '') {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Insira algum valor para depósito ou saque!',
      });
    };

    if (value <= 0 && value !== '') {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Insira algum valor maior que 0!',
      });
    };

    const { id } = clientData;

    if (typeof value === 'string' && value !== '' && value > 0) {

      if (selectedService === 'deposit') {
        const untreatedBalance = balance + parseFloat(value);
        const newBalance = Math.round(untreatedBalance * 100)/100;

        axios.put(`http://localhost:3009/account/${id}`, { newBalance })
        .then(res => {
          setClientData(res.data);
          swal({
            icon: 'success',
            title: 'Seu depósito foi efetuado com sucesso!',
            timer: 2500,
          });
        }).catch(err => {
          console.log(err);
        });
      };

      if (selectedService === 'withdraw' && balance > value) {
        const untreatedBalance = balance - parseFloat(value);
        const newBalance = Math.round(untreatedBalance * 100)/100;

        axios.put(`http://localhost:3009/account/${id}`, { newBalance })
        .then(res => {
          setClientData(res.data);
          swal({
            icon: 'success',
            title: 'Seu saque foi efetuado com sucesso!',
            timer: 2500,
          });
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
