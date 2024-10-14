import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-48 h-80 flex flex-col">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-3/4 w-full object-cover"
        />
        <div className="p-2 flex flex-col items-center justify-center h-1/4">
          <h3 className="text-md font-bold text-white text-center">
            {movie.title}
          </h3>
          <p className="text-gray-400 text-sm">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
