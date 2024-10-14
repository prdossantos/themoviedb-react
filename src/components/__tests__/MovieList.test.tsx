import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieList from '../MovieList';

const mockMovies = [
  {
    id: 1,
    title: 'Movie 1',
    poster_path: '/movie1.jpg',
    release_date: '2024-01-01',
  },
  {
    id: 2,
    title: 'Movie 2',
    poster_path: '/movie2.jpg',
    release_date: '2024-02-01',
  },
];

const renderWithRouter = (component: React.ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

test('renders MovieList with a list of MovieCard components', async () => {
  renderWithRouter(<MovieList movies={mockMovies} />);

  await screen.findByText(/movie 1/i);
  await screen.findByText(/movie 2/i);

  const movieCards = screen.getAllByRole('img');
  expect(movieCards).toHaveLength(mockMovies.length);
});
