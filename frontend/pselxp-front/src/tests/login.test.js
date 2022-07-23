import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import '@testing-library/jest-dom/extend-expect';
const { screen } = require('@testing-library/react');

describe('Tests application login page.', () => {
  test('Verify if inputs and button is rendering.', () => {
    renderWithRouter(<App />);
    const loginButton = screen.getByText('Acessar');
    expect(loginButton).toBeInTheDocument();
  });
});