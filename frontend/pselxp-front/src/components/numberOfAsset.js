import React from 'react';
import { useProvider } from '../context/provider';

function NumberOfAsset() {
  const { wantedStock, clientData } = useProvider();

  console.log(clientData);

  const total = clientData.stocks[wantedStock.id];

  return (
    <p className='text-bg-dark mt-5 rounded'>
      Amount of this asset client has: {total}
    </p>
  );
};

export default NumberOfAsset;
