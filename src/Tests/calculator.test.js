/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';

test('renders the Calculator component with the correct initial display', () => {
  // Render the Calculator component
  render(<Calculator />);

  // Check if the initial display is '0'
  const displayElement = screen.getByTestId('calculator-display');
  expect(displayElement).toHaveTextContent('0');
});
