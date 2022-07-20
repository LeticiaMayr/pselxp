import React from "react";
import Header from "../components/Header";
import StockList from "../components/StockList";
import ClientStockList from "../components/ClientStockList";
import DepositWithdraw from "../components/DepositWithdraw";

function Stocks() {
  return (
    <>
      <Header />
      <div>
        ações
      </div>
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
