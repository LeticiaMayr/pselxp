import React, { useEffect } from "react";
import Header from '../components/Header';
import { useProvider } from '../context/provider';
import BackButton from '../components/BackButton';
import DepositWithdraw from '../components/DepositWithdraw';
import StocksTableHead from '../components/StocksTableHead';
import OperationsTableLine from '../components/OperationsTableLine';
import BuySell from '../components/BuySell';
import { Row } from 'react-bootstrap';
import NumberOfAsset from '../components/numberOfAsset';

function Operations() {
  const { wantedStock, stockList, clientData } = useProvider();

  useEffect(() => {}, [stockList, wantedStock, clientData]);
  
  return (
    <>
      <Header />
      <h3 className='text-bg-secondary'>Comprar/Vender Ação</h3>
      <table className='table'>
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
      <DepositWithdraw />
      <NumberOfAsset />
      <Row className='fixed-bottom pt-3'>
        <BackButton />
      </Row>
    </>
  );
};

export default Operations;
