import React from 'react';
import { useProvider } from '../context/provider';

function NumberOfAsset() {
  const { totalOfWantedStock } = useProvider();

  console.log(totalOfWantedStock);

  return (
    <p className='text-bg-dark mt-5 rounded'>
      Amount of this asset client has: {totalOfWantedStock}
    </p>
  );
};

export default NumberOfAsset;
