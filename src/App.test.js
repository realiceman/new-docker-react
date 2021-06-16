import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Hi there p tag', () => {
  render(<App />);
  const linkElement = screen.getByText(/Changed with a feature/i);
  expect(linkElement).toBeInTheDocument();
});