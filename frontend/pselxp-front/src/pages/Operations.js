import React, { useEffect } from "react";
import Header from "../components/Header";
import { useProvider } from "../context/provider";
import BackButton from '../components/BackButton';
import DepositWithdraw from "../components/DepositWithdraw";
import StocksTableHead from "../components/StocksTableHead";
import OperationsTableLine from "../components/OperationsTableLine";
import BuySell from "../components/BuySell";
import ClientBalance from "../components/ClientBalance";

function Operations() {
  const { wantedStock, stockList, clientData } = useProvider();

  useEffect(() => {}, [stockList, wantedStock, clientData]);
  
  return (
    <>
      <Header />
      <ClientBalance />
      <h3>Comprar/Vender Ação</h3>
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
