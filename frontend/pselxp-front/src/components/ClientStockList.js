import React from "react";
import { useProvider } from "../context/provider";
import TableLine from "./TableLine";

function ClientStockList() {
  const {
    ClientStockList
   } = useProvider();

  return (
    <table>
      <thead>
        <tr>
          <th>
            Ação
          </th>
            <th>
            Qtde
          </th>
          <th>
            Valor (R$)
          </th>
          <th>
            Negociar
          </th>
        </tr>
      </thead>
      <tbody>
        {
          ClientStockList.map((stock) =>
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
  );
};

export default ClientStockList;
