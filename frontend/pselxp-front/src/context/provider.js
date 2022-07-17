import React, { useState } from 'react';

export const mainContext = React.createContext({});

export const GeneralProvider = (props) => {
  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState('');
  const [selectedService, setSelectedService] = useState('deposit');
  const [stockList, setStockList] = useState([]);

  return (
    <mainContext.Provider value={
      {
        balance, setBalance,
        value, setValue,
        selectedService, setSelectedService,
        stockList, setStockList
      }
    }>
      {props.children}
    </mainContext.Provider>
  );
};

export const useProvider = () => React.useContext(mainContext);
