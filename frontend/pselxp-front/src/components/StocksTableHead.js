import React from "react";

function StocksTableHead() {
  return (
    <>
      <th scope="col" className='text-center'>
        Ação
      </th>
      <th scope="col" className='text-center'>
        Qtde
      </th>
      <th scope="col" className='text-center'>
        Valor (R$)
      </th>
    </>
  );
};

export default StocksTableHead;
