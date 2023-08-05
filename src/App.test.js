import App from './App';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';


it('displays an error message for empty input', async () => {
  render(<App />);
  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);
  await waitFor(() => {
    // Test assertions for error message display
  });
});
