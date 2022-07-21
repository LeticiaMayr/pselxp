import React, { useState } from "react";
import { useProvider } from "../context/provider";

function BuySell() {
  const [assetManipulation, setAssetManipulation] = useState({buy: 0, sell: 0});
  const { wantedStock } = useProvider();

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
      console.log(`COMPREY ${assetManipulation.buy} AÇÕES`);
      console.log(wantedStock);
    };
    if (event.target.id === 'button-sell') {
      console.log(`VENDY ${assetManipulation.sell} AÇÕES`);
    }
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
