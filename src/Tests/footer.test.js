/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('renders the Footer component with correct text and link', () => {
  // Render the Footer component
  render(<Footer />);

  // Check if the text content is correct
  const linkElement = screen.getByTestId('author-link');
  expect(linkElement).toHaveAttribute('href', 'https://github.com/MasumaJaffery');
  expect(linkElement).toHaveTextContent('Masuma Jaffery');

  // Check if the year element is present
  const yearElement = screen.getByTestId('year');
  expect(yearElement).toHaveTextContent('2023');
});
