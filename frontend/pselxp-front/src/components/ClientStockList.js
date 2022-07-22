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
          clientStocks.map((stock) =>
            (
              <TableLine
                key={stock.id}
                clientStock={true}
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

export default ClientStockList;
