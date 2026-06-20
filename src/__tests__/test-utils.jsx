import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import examReducer from '../features/exam/examSlice';
import { MemoryRouter } from 'react-router-dom';

export function createTestStore(preloadedState) {
  return configureStore({
    reducer: { auth: authReducer, exam: examReducer },
    preloadedState,
  });
}

export function renderWithProviders(ui, { preloadedState = {}, store = createTestStore(preloadedState), route = '/' } = {}) {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper }) };
}

export * from '@testing-library/react';