import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from '../MovieCard';

const mockMovie = {
  id: 1,
  title: 'Test Movie',
  poster_path: '/test.jpg',
  release_date: '2024-01-01',
};

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

test('renders MovieCard with title and release date', () => {
  renderWithRouter(<MovieCard movie={mockMovie} />);

  expect(screen.getByText(/test movie/i)).toBeInTheDocument();
  expect(screen.getByText(/2024-01-01/i)).toBeInTheDocument();

  const img = screen.getByRole('img');
  expect(img).toHaveAttribute(
    'src',
    'https://image.tmdb.org/t/p/w500/test.jpg',
  );
  expect(img).toHaveAttribute('alt', 'Test Movie');
});
