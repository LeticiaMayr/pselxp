import React from 'react';
import { useProvider } from '../context/provider';

function NumberOfAsset() {
  let { wantedStock } = useProvider();

  return (
    <div>
      {wantedStock}
    </div>
  );
};

export default NumberOfAsset;
