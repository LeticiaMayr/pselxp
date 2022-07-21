import React from "react";
import Header from "../components/Header";
import { useProvider } from "../context/provider";
import BackButton from '../components/BackButton';
import DepositWithdraw from "../components/DepositWithdraw";
import StocksTableHead from "../components/StocksTableHead";
import OperationsTableLine from "../components/OperationsTableLine";
import BuySell from "../components/BuySell";

function Operations() {
  const { wantedStock } = useProvider();
  return (
    <>
      <Header />
      <h2>Comprar/Vender Ação</h2>
      <table>
        <thead>
          <StocksTableHead />
        </thead>
        <tbody>
          <OperationsTableLine
            ticker={wantedStock.ticker}
            available={wantedStock.available}
            value={wantedStock.value}
          />
        </tbody>
      </table>
      <BuySell />
      <div>
        <BackButton />
        <DepositWithdraw />
      </div>
    </>
  );
};

export default Operations;
