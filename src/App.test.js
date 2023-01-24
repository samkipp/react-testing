import { render, screen } from '@testing-library/react';
import App from './App';

test('test h1 entry header', () => {
  render(<App />);
  const headText = screen.getByText(/Hello from App Component/i);
  expect(headText).toBeInTheDocument();
  expect(headText).toHaveStyle(`color: red`);
});
