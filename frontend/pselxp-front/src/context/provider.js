import React, { useState } from 'react';

export const mainContext = React.createContext({});

export const GeneralProvider = (props) => {
  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState(0);
  const [selectedService, setSelectedService] = useState('deposit');
  const [stockList, setStockList] = useState([]);
  const [clientData, setClientData] = useState({});
  const [wantedStock, setWantedStock] = useState({});
  const [totalOfWantedStock, setTotalOfWantedStock] = useState(0);
  const [clientStocks, setClientStocks] = useState([]);

  return (
    <mainContext.Provider value={
      {
        balance, setBalance,
        value, setValue,
        selectedService, setSelectedService,
        stockList, setStockList,
        clientData, setClientData,
        wantedStock, setWantedStock,
        totalOfWantedStock, setTotalOfWantedStock,
        clientStocks, setClientStocks,
      }
    }>
      {props.children}
    </mainContext.Provider>
  );
};

export const useProvider = () => React.useContext(mainContext);
