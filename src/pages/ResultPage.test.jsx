import React from 'react';
import ResultPage from './ResultPage';
import { renderWithProviders, screen } from '../test-utils';

test('shows score and dashboard button', () => {
  renderWithProviders(<ResultPage />, { preloadedState: { auth: { isAuthenticated: true }, exam: { score: 4 } } });

  expect(screen.getByText(/Congratulations/i)).toBeInTheDocument();
  expect(screen.getByText(/Your score: 4/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Dashboard/i })).toBeInTheDocument();
});
