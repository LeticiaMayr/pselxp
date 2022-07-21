import React from "react";
import { useProvider } from "../context/provider";
import TableLine from "./TableLine";
import StocksTableHead from "./StocksTableHead";

function StockList() {
  const {
    stockList
   } = useProvider();

  return (
    <table>
      <thead>
        <tr>
          <StocksTableHead />
          <th>
            Negociar
          </th>
        </tr>
      </thead>
      <tbody>
        {
          stockList.map((stock) =>
            (
              <TableLine
                key={stock.id}
                clientStock={false}
                ticker={stock.ticker}
                available={stock.available}
                value={stock.value}
                id={stock.id}
              />
            )
          )
        }
      </tbody>
    </table>
  );
};

export default StockList;
