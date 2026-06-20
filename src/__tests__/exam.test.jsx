import React from 'react';
import ExamPage from '../pages/ExamPage';
import { renderWithProviders, screen } from './test-utils';

test('renders exam page structure when authenticated', () => {
  // We render ExamPage with route params by mounting within router at /exam/maths
  renderWithProviders(<ExamPage />, { preloadedState: { auth: { isAuthenticated: true }, exam: { score: 0 } }, route: '/exam/maths' });
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});
