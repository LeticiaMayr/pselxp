import React from "react";
import Header from "../components/Header";
import BackButton from '../components/BackButton';
import DepositWithdraw from "../components/DepositWithdraw";
import StocksTableHead from "../components/StocksTableHead";

function Operations() {
  return (
    <>
      <Header />
      <h2>Comprar/Vender Ação</h2>
      <table>
        <thead>
          <StocksTableHead />
        </thead>
      </table>
      <BackButton />
      <DepositWithdraw />
    </>
  );
};

export default Operations;
