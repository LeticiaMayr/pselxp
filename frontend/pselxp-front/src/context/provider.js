import React, { useState } from 'react';

export const mainContext = React.createContext({});

export const GeneralProvider = (props) => {
  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState(0);
  const [selectedService, setSelectedService] = useState('deposit');
  const [stockList, setStockList] = useState([]);
  const [clientData, setClientData] = useState({});
  const [wantedStock, setWantedStock] = useState({});

  return (
    <mainContext.Provider value={
      {
        balance, setBalance,
        value, setValue,
        selectedService, setSelectedService,
        stockList, setStockList,
        clientData, setClientData,
        wantedStock, setWantedStock,
      }
    }>
      {props.children}
    </mainContext.Provider>
  );
};

export const useProvider = () => React.useContext(mainContext);
