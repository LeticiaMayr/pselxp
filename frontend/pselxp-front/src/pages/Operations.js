import React from "react";
import Header from "../components/Header";
import BackButton from '../components/BackButton';
import DepositWithdraw from "../components/DepositWithdraw";

function Operations() {
  return (
    <>
      <Header />
      <div>
        Operações
      </div>
      <BackButton />
      <DepositWithdraw />
    </>
  );
};

export default Operations;
