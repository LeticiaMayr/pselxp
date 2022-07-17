import React from "react";
import { useProvider } from "../context/provider";

function Header() {
  const {
    setStockList
   } = useProvider();

  return (
    <>
      <div>
      Disponíveis para investir:
      </div>
      <table>
        <thead>
          <tr>
            Ação
          </tr>
          <tr>
            Quantidade
          </tr>
          <tr>
            Valor
          </tr>
          <tr>
            Negociar
          </tr>
        </thead>
        <tbody>
          {setStockList.map(() => <div></div>)}
        </tbody>
      </table>
    </>
  );
};

export default Header;
