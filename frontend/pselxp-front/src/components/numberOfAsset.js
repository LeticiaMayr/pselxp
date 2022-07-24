import React from 'react';
import { useProvider } from '../context/provider';

function NumberOfAsset() {
  const { totalOfWantedStock } = useProvider();

  return (
    <p className='text-bg-dark mt-5 rounded'>
      Quantidade de ações possuída pelo cliente: {totalOfWantedStock}
    </p>
  );
};

export default NumberOfAsset;
