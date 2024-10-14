import React, { Suspense } from 'react';
import Loader from './Loader';
import { Movie } from '../types/movie';

interface MovieListProps {
  movies: Movie[];
}

const MovieCard = React.lazy(() => import('./MovieCard'));

const MovieList: React.FC<MovieListProps> = ({
  movies,
}: {
  movies: Movie[];
}) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie: Movie, index: number) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </div>
    </Suspense>
  );
};

export default MovieList;
