import React from 'react';
import { useProvider } from '../context/provider';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import ConfirmButton from '../components/ConfirmButton';

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
        Saldo em conta: R$ {balance}
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
