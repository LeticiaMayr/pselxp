import React from "react";
import Negotiate from "./Negotiate";

function TableLine(props) {
  const { available, ticker, value, clientStock, id } = props;

  return (
    <tr>
      <td>
        {ticker}
      </td>
      <td>
        {available}
      </td>
      <td>
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
