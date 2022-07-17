import React from "react";
import { useProvider } from "../context/provider";
import TableLine from "./TableLine";

function StockList() {
  const {
    stockList
   } = useProvider();

  return (
    <>
      <div>
      Disponíveis para investir:
      </div>
      <table>
        <thead>
          <tr>
            <th>
              Ação
            </th>
            <th>
              Quantidade
            </th>
            <th>
              Valor
            </th>
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
                  ticker={stock.ticker}
                  available={stock.available}
                  value={stock.value}
                />
              )
            )
          }
        </tbody>
      </table>
    </>
  );
};

export default StockList;
