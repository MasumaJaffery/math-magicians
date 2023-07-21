/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

test('renders the Navbar component with correct links', () => {
  // Render the Navbar component within the BrowserRouter
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  // Check if the logo text is present
  const logoElement = screen.getByText('Math-Magicians');
  expect(logoElement).toBeInTheDocument();

  // Check if the home link is present and has the correct URL
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute('href', '/');

  // Check if the calculator link is present and has the correct URL
  const calculatorLink = screen.getByText('Calculator');
  expect(calculatorLink).toBeInTheDocument();
  expect(calculatorLink).toHaveAttribute('href', '/Calculator');

  // Check if the quote link is present and has the correct URL
  const quoteLink = screen.getByText('Quote');
  expect(quoteLink).toBeInTheDocument();
  expect(quoteLink).toHaveAttribute('href', '/Quote');
});
