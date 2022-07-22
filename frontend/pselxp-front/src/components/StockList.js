import React from "react";
import { useProvider } from "../context/provider";
import TableLine from "./TableLine";

function StockList() {
  const {
    stockList
   } = useProvider();

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope="col">
            Ação
          </th>
          <th scope="col">
            Qtde
          </th>
          <th scope="col">
            Valor (R$)
          </th>
          <th scope="col">
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
