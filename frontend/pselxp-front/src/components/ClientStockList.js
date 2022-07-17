import React, { useEffect, useState } from "react";
import { useProvider } from "../context/provider";
import TableLine from "./TableLine";

function ClientStockList() {
  const [clientStocks, setClientStocks] = useState([]);

  const {
    clientData,
    stockList
   } = useProvider();

  useEffect(() => {
    setClientStocks(stockList.filter((stock) => Object.values(clientData.stocks).includes(stock.id)));
  }, [stockList, clientData.stocks]);

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
          clientStocks.map((stock) =>
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
