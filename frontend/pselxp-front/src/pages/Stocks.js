import React, { useEffect } from "react";
import Header from "../components/Header";
import StockList from "../components/StockList";
import ClientStockList from "../components/ClientStockList";
import DepositWithdraw from "../components/DepositWithdraw";
import { useProvider } from "../context/provider";

function Stocks() {
  const { clientData, wantedStock, stockList } = useProvider()

  useEffect(() => {}, [stockList, wantedStock, clientData]);
  
  return (
    <>
      <Header />
      <div>
        Minhas ações:
      </div>
      <ClientStockList />
      <div>
        Disponíveis para investir:
      </div>
      <StockList />
      <DepositWithdraw />
    </>
  );
};

export default Stocks;
