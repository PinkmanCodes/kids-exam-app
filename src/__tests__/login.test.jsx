import React from 'react';
import LoginPage from '../pages/LoginPage';
import { renderWithProviders, screen } from './test-utils';
import userEvent from '@testing-library/user-event';

test('shows error on wrong credentials and logs in with correct ones', async () => {
  const user = userEvent.setup();
  const { store } = renderWithProviders(<LoginPage />);

  const username = screen.getByLabelText(/Username/i);
  const password = screen.getByLabelText(/Password/i);
  const button = screen.getByRole('button', { name: /Login/i });

  await user.type(username, 'wrong');
  await user.type(password, 'nope');
  await user.click(button);

  expect(screen.getByText(/Invalid username or password/i)).toBeInTheDocument();

  await user.clear(username);
  await user.clear(password);
  await user.type(username, 'student');
  await user.type(password, '12345');
  await user.click(button);

  expect(store.getState().auth.isAuthenticated).toBe(true);
});
