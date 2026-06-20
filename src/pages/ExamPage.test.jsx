import React from 'react';
import ExamPage from './ExamPage';
import { renderWithProviders, screen } from '../test-utils';

test('renders exam page structure when authenticated', () => {
  renderWithProviders(<ExamPage />, { preloadedState: { auth: { isAuthenticated: true }, exam: { score: 0 } }, route: '/exam/maths' });
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});
