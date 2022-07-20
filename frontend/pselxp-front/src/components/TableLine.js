import React from "react";
import Negotiate from "./Negotiate";

function TableLine(props) {
  const { available, ticker, value } = props;
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
      <Negotiate />
    </tr>
  );
};

export default TableLine;
