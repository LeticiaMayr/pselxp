import React, { useState } from "react";
import { useProvider } from "../context/provider";
import axios from "axios";

function BuySell() {
  const [assetManipulation, setAssetManipulation] = useState({buy: 0, sell: 0});
  const { wantedStock, clientData, setStockList, setClientData } = useProvider();

  function handleChange({ target }) {
    if (target.id === 'buy') {
      setAssetManipulation({ buy: target.value, sell: assetManipulation.sell });
    };
    if (target.id === 'sell') {
      setAssetManipulation({ buy: assetManipulation.buy, sell: target.value });
    };
  };

  function handleClick(event) {
    event.preventDefault();
    if (event.target.id === 'button-buy') {
      axios.put(`http://localhost:3009/stocks/${wantedStock.id}`,
          {
            purchaseAmount: parseInt(assetManipulation.buy),
            clientId: clientData.id,
          }
        )
        .then(res => {
          console.log(res.data);
        }).catch(err => {
          console.log(err);
        });
    };

    if (event.target.id === 'button-sell') {
      console.log(`VENDY ${assetManipulation.sell} AÇÕES`);
      console.log(-assetManipulation.sell)
      axios.put(`http://localhost:3009/stocks/${wantedStock.id}`,
        {
          purchaseAmount: parseInt(- assetManipulation.sell),
          clientId: clientData.id,
        }
      )
        .then(res => {
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
  
  return (
    <form>
      <div>
        <label htmlFor='buy'>
          <button
            id='button-buy'
            onClick={ handleClick }
          >
            Comprar
          </button>
          <input
            id='buy'
            type='number'
            value={ assetManipulation.buy }
            onChange={ handleChange }
            placeholder={'Informe o valor'}
            />
        </label>
      </div>
      {wantedStock.clientStock ? 
        <div>
          <label htmlFor='sell'>
            <button
              id='button-sell'
              onClick={ handleClick }
            >
              Vender
            </button>
            <input
              id='sell'
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
