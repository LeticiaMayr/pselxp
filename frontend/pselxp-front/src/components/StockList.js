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
          <th scope="col" className='text-rigth'>
            Ação
          </th>
          <th scope="col" className='text-rigth'>
            Qtde
          </th>
          <th scope="col" className='text-rigth'>
            Valor (R$)
          </th>
          <th scope="col" className='text-rigth'>
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
