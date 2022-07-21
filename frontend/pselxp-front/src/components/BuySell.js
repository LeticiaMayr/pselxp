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
  
  return (
    <form>
      <div>
        <label htmlFor='buy'>
          Comprar
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
            Vender
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
