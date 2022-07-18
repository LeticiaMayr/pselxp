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
    const possessedStocks = clientData.stocks ? Object.keys(clientData.stocks).map((key) => parseInt(key)) : [] // Ids come as strings so had to add this extra step
    setClientStocks(stockList.filter((stock) => possessedStocks.includes(stock.id)));
  }, [clientData.stocks, stockList, clientData]);

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
