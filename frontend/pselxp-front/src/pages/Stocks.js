import React, { useEffect } from "react";
import Header from "../components/Header";
import StockList from "../components/StockList";
import ClientStockList from "../components/ClientStockList";
import DepositWithdraw from "../components/DepositWithdraw";
import { useProvider } from "../context/provider";
import { Container, Row } from 'react-bootstrap';

function Stocks() {
  const { clientData, wantedStock, stockList } = useProvider();

  useEffect(() => {}, [stockList, wantedStock, clientData]);
  
  return (
    <>
      <Header />
      <Row>
        <Container className='mb-3'>
          <h5 className='bg-secondary rounded container'>
            Minhas ações:
          </h5>
          <Container className='d-flex justify-content-around'>
            <ClientStockList />
          </Container>
        </Container>
      </Row>
      <Row>
        <Container className='mb-3'>
          <h5 className='bg-secondary rounded container'>
            Disponíveis para investir:
          </h5>
          <Container className='d-flex justify-content-around'>
            <StockList />
          </Container>
        </Container>
      </Row>
      <DepositWithdraw />
    </>
  );
};

export default Stocks;
