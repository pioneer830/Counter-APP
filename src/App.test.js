import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders the app with initial count', () => {
  render(<App />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments the count when the increment button is clicked', () => {
  render(<App />);
  const incrementButton = screen.getByText(/Increment/i);
  const countElement = screen.getByText(/Count: 0/i);

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('Count: 1');
});

test('decrements the count when the decrement button is clicked', () => {
  render(<App />);
  const incrementButton = screen.getByText(/Increment/i);
  const decrementButton = screen.getByText(/Decrement/i);
  const countElement = screen.getByText(/Count: 0/i);

  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('Count: 0');
});

test('count cannot go below 0', () => {
  render(<App />);
  const decrementButton = screen.getByText(/Decrement/i);
  const countElement = screen.getByText(/Count: 0/i);

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('Count: 0');
});