import React from 'react';

export const mainContext = React.createContext({});

export const GeneralProvider = (props) => {

  return (
    <mainContext.Provider value={
      {}
    }>
      {props.children}
    </mainContext.Provider>
  );
};

export const useProvider = () => React.useContext(mainContext);
