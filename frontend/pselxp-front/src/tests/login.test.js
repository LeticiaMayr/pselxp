import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
const { screen } = require('@testing-library/react');

describe('Tests application login page.', () => {

  test('Verify if button and button is rendering.', () => {
    renderWithRouter(<App />);

    const loginButton = screen.getByText('Acessar');

    expect(loginButton).toBeInTheDocument();
  });

  test('Verify if inputs are rendering.', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Senha');

    expect(emailInput && passwordInput).toBeInTheDocument();
  });

  test('Verify if inputs are updating when user type something inside them.', () => {
    renderWithRouter(<App />);

    const randomSentence = 'Esse é meu jeito ninja';

    const emailInput = screen.getByPlaceholderText('E-mail');
    const passwordInput = screen.getByPlaceholderText('Senha');

    userEvent.type(emailInput, randomSentence);
    userEvent.type(passwordInput, 'de ser!!!!');

    const expectedRandomSentence = randomSentence.replaceAll(' ', ''); // As the type of input is "e-mail" it wont let some inputs come from user, such as space

    expect(emailInput).toHaveValue(expectedRandomSentence);
    expect(passwordInput).toHaveValue('de ser!!!!');
  });

  // test('Checking if the button actually changes the route to /stocks if user logs correctly.', () => { // Having a problem with changing routes history not working
  //   const { history } = renderWithRouter(<App />);

  //   console.log(history.location);

  //   history.location.pathname = '/stocks'

  //   console.log(history.location);

    // const emailInput = screen.getByPlaceholderText('E-mail');
    // const passwordInput = screen.getByPlaceholderText('Senha');

    // userEvent.type(emailInput, 'xpto@xpto.com');
    // userEvent.type(passwordInput, '123123123123');

    // const loginButton = screen.getByText('Acessar');

    // userEvent.click(loginButton);

    // expect(loginButton).toBeInTheDocument();
  // });
});