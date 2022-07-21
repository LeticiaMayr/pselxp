import React from "react";

function OperationsTableLine(props) {
  const { ticker, available, value } = props;
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
    </tr>
  );
};

export default OperationsTableLine;
