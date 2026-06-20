import React from 'react';
import Header from '../components/Header';
import { renderWithProviders, screen, fireEvent } from './test-utils';

test('renders title and logout when authenticated, logout clears auth', () => {
  const { store } = renderWithProviders(<Header />, { preloadedState: { auth: { isAuthenticated: true }, exam: { score: 0 } } });

  expect(screen.getByText(/Kids Exam Portal/i)).toBeInTheDocument();
  const logoutBtn = screen.getByText(/Logout/i);
  expect(logoutBtn).toBeInTheDocument();

  fireEvent.click(logoutBtn);
  expect(store.getState().auth.isAuthenticated).toBe(false);
});
