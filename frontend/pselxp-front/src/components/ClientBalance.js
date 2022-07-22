import React, { useEffect } from "react";
import { useProvider } from "../context/provider";

function ClientBalance() {
  const {balance, setBalance, clientData} = useProvider();

  useEffect(() => {
    setBalance(clientData.money);
  });

  return (
    <div>
        Saldo em conta: R$ {balance}
    </div>
  );
};

export default ClientBalance;
