import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { moviesAtom } from '../store/movies';
import MovieList from '../components/MovieList';
import Alert from '../components/Alert';
import { useFetchMovies } from '../services/movieService';
import Loader from '../components/Loader';

const Home: React.FC = () => {
  const [movies] = useAtom(moviesAtom);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const fetchMovies = useFetchMovies();

  const loadMovies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await fetchMovies(page);
    } catch (err) {
      setError('Could not fetch movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !error) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, [isLoading, error]);

  useEffect(() => {
    if (!isLoading && !error) {
      loadMovies();
    }
  }, [page]);

  if (isLoading && page === 1) {
    <Loader />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white mb-6">Popular Movies</h1>
      {error && (
        <Alert
          message={error}
          type="error"
          details="### Possible Solutions:
    - Check your network connection.
    - Ensure your API key is valid.
    - Contact support if the issue persists."
        />
      )}
      <MovieList movies={movies} />
      {isLoading && <p className="text-center text-gray-400">Loading...</p>}
      <div ref={sentinelRef} className="h-10"></div>
    </div>
  );
};

export default Home;
