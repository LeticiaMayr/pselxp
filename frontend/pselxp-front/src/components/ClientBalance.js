import React, { useEffect } from "react";
import { useProvider } from "../context/provider";

function ClientBalance() {
  const { balance } = useProvider();

  useEffect(() => {}, [balance]);

  return (
    <div>
        Saldo em conta: R$ {balance}
    </div>
  );
};

export default ClientBalance;
