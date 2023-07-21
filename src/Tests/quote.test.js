/* eslint-disable linebreak-style */
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../components/Quotes';

const mockApiResponse = [
  {
    quote: 'Test quote',
    author: 'Test author',
  },
];

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockApiResponse),
  }));
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders loading text initially', async () => {
  render(<Quote />);
  const loadingElement = screen.getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();
});

test('renders the Quote component with an error message if fetch fails', async () => {
  global.fetch = jest.fn(() => Promise.resolve({
    ok: false,
    status: 500,
    statusText: 'Internal Server Error',
  }));

  await act(async () => {
    render(<Quote />);
  });

  const errorElement = screen.getByText('Error!');
  expect(errorElement).toBeInTheDocument();
});
