import { render, screen } from '@testing-library/react';
import NewsList from './news/NewsList';

test('renders learn react link', () => {
  render(<NewsList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
