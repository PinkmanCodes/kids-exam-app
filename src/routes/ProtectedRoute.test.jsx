import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { renderWithProviders, screen } from '../test-utils';

test('redirects to login when not authenticated', () => {
  renderWithProviders(
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<div>Protected</div>} />
      </Route>
      <Route path="/login" element={<div>Login</div>} />
    </Routes>,
    { route: '/dashboard', preloadedState: { auth: { isAuthenticated: false }, exam: { score: 0 } } }
  );

  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

test('shows protected outlet when authenticated', () => {
  renderWithProviders(
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<div>Protected</div>} />
      </Route>
      <Route path="/login" element={<div>Login</div>} />
    </Routes>,
    { route: '/dashboard', preloadedState: { auth: { isAuthenticated: true }, exam: { score: 0 } } }
  );

  expect(screen.getByText(/Protected/i)).toBeInTheDocument();
});
