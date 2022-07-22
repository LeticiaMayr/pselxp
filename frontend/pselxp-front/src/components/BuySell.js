import React, { useState } from "react";
import { useProvider } from "../context/provider";
import axios from "axios";
import swal from "sweetalert";

function BuySell() {
  const [assetManipulation, setAssetManipulation] = useState({buy: 0, sell: 0});
  const { balance, wantedStock, clientData, setStockList, setClientData } = useProvider();

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

    console.log(assetManipulation[target.id]);

    if (assetManipulation[target.id] <= 0) {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Insira algum valor adequado!',
        timer: 2500,
      });
    };

    if (target.value > 0) {
      if (target.id === 'button-buy' && (target.value * wantedStock.value) > balance) {
        axios.put(`http://localhost:3009/stocks/${wantedStock.id}`,
          {
            purchaseAmount: parseInt(assetManipulation.buy),
            clientId: clientData.id,
          }).then(res => {
            console.log(res.data);
          }).catch(err => {
            console.log(err);
          });
      };

      if (target.id === 'button-sell' && clientData.stocks[wantedStock.id] > target.value) {
        console.log(`VENDY ${assetManipulation.sell} AÇÕES`);
        console.log(-assetManipulation.sell)
        axios.put(`http://localhost:3009/stocks/${wantedStock.id}`,
          {
            purchaseAmount: parseInt(- assetManipulation.sell),
            clientId: clientData.id,
          }).then(res => {
            console.log(res.data);
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
  
  return (
    <form>
      <div>
        <label htmlFor='buy-input'>
          <button
            id='buy'
            onClick={ handleClick }
          >
            Comprar
          </button>
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
        <div>
          <label htmlFor='sell-input'>
            <button
              id='sell'
              onClick={ handleClick }
            >
              Vender
            </button>
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
    </form>
  );
};

export default BuySell;
