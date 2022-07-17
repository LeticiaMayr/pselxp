import React from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import ConfirmButton from '../components/ConfirmButton';
import { useProvider } from '../context/provider';

function Account() {
  const {
    balance,
    value, setValue,
    setSelectedService,
   } = useProvider()

  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      <Header/>
      <div>
        Saldo em conta: {balance}
      </div>
      <div>
        <button
          id='deposit'
          onClick={ () => setSelectedService('deposit') }
        >
          Depositar
        </button>
        <button
          id='withdraw'
          onClick={ () => setSelectedService('withdraw') }
        >
          Retirada
        </button>
      </div>
      <input
        type='number'
        placeholder='informe o valor'
        step={0.01}
        onChange={ handleChange }
        value={ value }
      />
      <div>
        <BackButton />
        <ConfirmButton />
      </div>
    </>
  );
};

export default Account;
