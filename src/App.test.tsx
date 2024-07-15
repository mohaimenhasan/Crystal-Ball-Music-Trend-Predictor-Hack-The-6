import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login with Spotify button if not authenticated', () => {
  render(<App />);
  const loginButton = screen.getByText(/Log in with Spotify/i);
  expect(loginButton).toBeInTheDocument();
});