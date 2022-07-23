import React from "react";
import Negotiate from "./Negotiate";

function TableLine(props) {
  const { available, ticker, value, clientStock, id } = props;
  
  return (
    <tr>
      <th scope="row" className='text-center text-bg-warning rounded'>
        {ticker}
      </th>
      <td className='text-center text-bg rounded'>
        {available}
      </td>
      <td className='text-center text-bg-dark rounded'>
        {value}
      </td>
      <Negotiate
        id={id}
        available={available}
        ticker={ticker}
        value={value}
        clientStock={clientStock}
      />
    </tr>
  );
};

export default TableLine;
