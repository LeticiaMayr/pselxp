import React from "react";

function TableLine(props) {
  const { available, ticker, value } = props;
  return (
    <tr>
      <td>
        {available}
      </td>
      <td>
        {ticker}
      </td>
      <td>
        {value}
      </td>
    </tr>
  );
};

export default TableLine;
