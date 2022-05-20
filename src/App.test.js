import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('when I click Add Fairy, there is one fairy added to the parade', () => {
  render(<App />);
  const initialFairies = 0;
  const addFairyButton = screen.getByText(/Add Fairy/i);
  fireEvent.click(addFairyButton);
  const fairyEmojisAfterClick = screen.queryAllByText(/🧚‍♀️/i);
  expect(fairyEmojisAfterClick.length).toBe(initialFairies + 1);
});

test('when I click Open Festival, the prompt changes to Welcome to Midsummer Festival', () => {
  render(<App />);
  const openFestivalButton = screen.getByText(/Open Festival/i);
  fireEvent.click(openFestivalButton);
  const promptAfterOpeningFestival = screen.getByText(/Welcome to the Midsummer Festival!/i);
  expect(promptAfterOpeningFestival).toBeInTheDocument();
});
