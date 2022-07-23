import React, { useState, useEffect } from "react";
import { useProvider } from "../context/provider";
import axios from "axios";
import swal from "sweetalert";
import { Form, Button } from 'react-bootstrap';

function BuySell() {
  const [assetManipulation, setAssetManipulation] = useState({buy: 0, sell: 0});
  const { balance, setBalance, wantedStock, setWantedStock, clientData, setStockList, setClientData, stockList } = useProvider();

  function handleChange({ target }) {
    if (target.id === 'buy-input') {
      setAssetManipulation({ buy: target.value, sell: assetManipulation.sell });
    };
    if (target.id === 'sell-input') {
      setAssetManipulation({ buy: assetManipulation.buy, sell: target.value });
    };
  };

  function handleClick(event) {
    event.preventDefault();
    const { target } = event;

    if (assetManipulation[target.id] <= 0) {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Insira algum valor adequado!',
        timer: 2500,
      });
    };

    if (assetManipulation[target.id] > 0) {
      if (target.id === 'buy' && (assetManipulation[target.id] * wantedStock.value) <= balance) {
        axios.put(`http://localhost:3009/stocks/${wantedStock.id}`,
          {
            purchaseAmount: parseInt(assetManipulation.buy),
            clientId: clientData.id,
          }).then(res => {
            console.log(res.data);
            console.log(wantedStock);
            setWantedStock({...res.data.wantedStock, clientStock: true });
            setBalance(res.data.wantedClient.money);
          }).catch(err => {
            console.log(err);
          });
      };

      if (target.id === 'sell' && clientData.stocks[wantedStock.id] >= assetManipulation[target.id]) {
        axios.put(`http://localhost:3009/stocks/${wantedStock.id}`,
          {
            purchaseAmount: parseInt(- assetManipulation.sell),
            clientId: clientData.id,
          }).then(res => {
            const stillHasAsset = res.data.wantedClient.stocks[wantedStock.id] ? true : false;
            setWantedStock({...res.data.wantedStock, clientStock: stillHasAsset });
            setBalance(res.data.wantedClient.money);
          }).catch(err => {
            console.log(err);
          });
      };

      axios.get(`http://localhost:3009/clients/${clientData.email}`)
        .then(res => {
          setClientData(res.data);
        }).catch(err => {
          console.log(err);
      });

      axios.get('http://localhost:3009/stocks')
        .then(res => {
          setStockList(res.data);
        }).catch(err => {
          console.log(err);
      });
    };
  };

  useEffect(() => {}, [stockList, wantedStock, clientData]);
  
  return (
    <Form>
      <div className='mb-3'>
        <label htmlFor='buy-input'>
          <Button
            className='text-bg-success'
            id='buy'
            onClick={ handleClick }
          >
            Comprar
          </Button>
          <input
            id='buy-input'
            type='number'
            value={ assetManipulation.buy }
            onChange={ handleChange }
            placeholder={'Informe o valor'}
            />
        </label>
      </div>
      {wantedStock.clientStock ? 
        <div className='mb-3'>
          <label htmlFor='sell-input'>
            <Button
              className='text-bg-danger'
              id='sell'
              onClick={ handleClick }
            >
              Vender
            </Button>
            <input
              id='sell-input'
              type='number'
              value={ assetManipulation.sell }
              onChange={ handleChange }
              placeholder={'Informe o valor'}
              />
          </label>
        </div>
        : null}
    </Form>
  );
};

export default BuySell;
