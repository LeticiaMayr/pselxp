import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const MIN_PASSWORD_LENGTH = 6;

function Login() {
  const navigate = useNavigate();

  const quotedUser = localStorage.getItem('lastUser')
  const lastUser = quotedUser.slice(1, quotedUser.length - 1); // Remove quotes from email required from local storage

  const [emailInput, setEmailInput] = useState(lastUser);
  const [passwordInput, setPasswordInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const emailRegex = /\S+@\S+\.com/;

    if (emailRegex.test(emailInput) && passwordInput.length > MIN_PASSWORD_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailInput, passwordInput]);

  function handleChange({ target }) {
    if (target.id === 'email') {
      setEmailInput(target.value);
    }
    if (target.id === 'password') {
      setPasswordInput(target.value);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    const now = new Date(); // Check a better way to store date later
    localStorage.setItem('loginDateAndHour', JSON.stringify(now));
    localStorage.setItem('lastUser', JSON.stringify(emailInput));
    navigate('/stocks');
  }

  return (
    <form>
      <label htmlFor='email'>
        E-mail:
        <input
          id='email'
          type='email'
          value={ emailInput }
          onChange={ handleChange }
        />
      </label>

      <label htmlFor='password'>
        Senha:
        <input
          id='password'
          type='password'
          value={ passwordInput }
          onChange={ handleChange }
        />
      </label>

      <button
        type='submit'
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Acessar
      </button>
    </form>
  );
};

export default Login;
