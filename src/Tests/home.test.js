/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

test('renders the Home component with correct content', () => {
  // Render the Home component
  render(<Home />);

  // Check if the content is correct
  const contentElement = screen.getByText(
    /Welcome to our page! Hello there, math magician! This is the Math Magicians web app. The web app is simple. This Web App facilates you will be able to do some simple calculations using our Web Calculator and refresh your soul with quotes. I hope you like this website. Lets explore the other pages, click on the links above!/i,
  );
  expect(contentElement).toBeInTheDocument();
});
