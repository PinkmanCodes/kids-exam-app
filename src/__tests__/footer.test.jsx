import React from 'react';
import Footer from '../components/Footer';
import { renderWithProviders, screen } from './test-utils';

test('renders footer copyright text', () => {
  renderWithProviders(<Footer />);
  expect(screen.getByText(/Kids Exam Portal/i)).toBeInTheDocument();
});
