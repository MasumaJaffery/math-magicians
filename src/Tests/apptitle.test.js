/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Heading from '../components/AppTitle';

test('renders the Heading component with the correct heading text', () => {
  // Render the Heading component
  render(<Heading />);

  // Check if the heading text is correct
  const headingElement = screen.getByText('Math Magicians');
  expect(headingElement).toBeInTheDocument();
});
