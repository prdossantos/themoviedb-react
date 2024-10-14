import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useParams } from 'react-router-dom';
import { atom } from 'jotai';
import Loader from '../components/Loader';
import type { MovieDetails } from '../types/movie';

const movieDetailsAtom = atom<{ [id: string]: MovieDetails | undefined }>({});

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetailsCache, setMovieDetailsCache] = useAtom(movieDetailsAtom);
  const movieDetails = id ? movieDetailsCache[id] : null;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id || movieDetails) return;

      const res = await fetch(
        `${import.meta.env.VITE_TMDB_API_URL}/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
      );

      if (!res.ok) {
        console.error('Failed to fetch movie details');
        return;
      }

      const data = await res.json();
      setMovieDetailsCache((prevCache) => ({
        ...prevCache,
        [id]: data,
      }));
    };

    fetchMovieDetails();
  }, [id, movieDetails, setMovieDetailsCache]);

  if (!movieDetails) return <Loader />;

  return (
    <div
      className="relative text-white min-h-screen"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative container mx-auto p-8 flex flex-col md:flex-row items-center gap-8 min-h-screen">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="w-72 rounded-lg shadow-lg"
        />

        <div className="text-left max-w-2xl">
          <h1 className="text-4xl font-bold mb-2">{movieDetails.title}</h1>

          <p className="text-gray-400 mb-4">
            {new Date(movieDetails.release_date).toLocaleDateString()} •{' '}
            {movieDetails.genres
              .map((genre: { id: number; name: string }) => genre.name)
              .join(', ')}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center bg-yellow-500 text-black px-2 py-1 rounded-full font-semibold">
              {movieDetails.vote_average.toFixed(1)}
            </span>
            <span>{movieDetails.runtime} min</span>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300">{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
