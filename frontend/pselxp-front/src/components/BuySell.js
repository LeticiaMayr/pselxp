import React, { useState } from "react";

function BuySell() {
  const [assetManipulation, setAssetManipulation] = useState({buy: 0, sell: 0});

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
    </form>
  );
};

export default BuySell;
