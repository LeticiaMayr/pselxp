import React from "react";
import { useProvider } from "../context/provider";
import axios from "axios";
import swal from "sweetalert";
import { Button } from 'react-bootstrap'

function ConfirmButton() {
  const { balance, setBalance, selectedService, value, clientData, setClientData } = useProvider();

  console.log(clientData);

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
        const untreatedBalance = parseFloat(balance) + parseFloat(value);
        const newBalance = untreatedBalance.toFixed(2);

        axios.put(`http://localhost:3009/account/${id}`, { newBalance })
        .then(res => {
          setBalance(res.data.money);
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
        const untreatedBalance = parseFloat(balance) - parseFloat(value);
        const newBalance = untreatedBalance.toFixed(2);

        axios.put(`http://localhost:3009/account/${id}`, { newBalance })
        .then(res => {
          setBalance(res.data.money);
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
    <Button
      onClick={ handleAccount }
    >
      Confirmar
    </Button>
  );
};

export default ConfirmButton;
