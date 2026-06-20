import React from 'react';
import DashboardPage from '../pages/DashboardPage';
import { renderWithProviders, screen } from './test-utils';

test('renders dashboard buttons', () => {
  renderWithProviders(<DashboardPage />, { preloadedState: { auth: { isAuthenticated: true }, exam: { score: 0 } } });
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Maths/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Logical Thinking/i })).toBeInTheDocument();
});
