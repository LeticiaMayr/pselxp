import React from "react";

function OperationsTableLine(props) {
  const { ticker, available, value } = props;

  return (
    <tr>
      <th scope="row" className='text-center text-bg-warning rounded'>
        {ticker}
      </th>
      <td className='text-center rounded'>
        {available}
      </td>
      <td className='text-center text-bg-dark rounded'>
        {value}
      </td>
    </tr>
  );
};

export default OperationsTableLine;
