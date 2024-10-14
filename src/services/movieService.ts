
import { movieDetailsCacheAtom, moviesAtom, moviesCacheAtom } from '../store/movies';
import {useAtom } from 'jotai';

export const useFetchMovies = () => {
  const [, setMovies] = useAtom(moviesAtom);
  const [cache, setCache] = useAtom(moviesCacheAtom);

  const fetchMovies = async (page: number) => {
    
    if (cache[page]) {
      
      setMovies((prevMovies) => [...prevMovies, ...cache[page]]);
      return;
    }

    const url = `${import.meta.env.VITE_TMDB_API_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=${page}`;
    
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      
      setCache((prevCache) => ({ ...prevCache, [page]: data.results }));
      
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      throw new Error('Could not fetch movies. Please try again later.');
    }
  };

  return fetchMovies;
};

export const useFetchMovieDetail = () => {
  const [cache, setCache] = useAtom(movieDetailsCacheAtom);

  const fetchMovieDetail = async (id: string) => {
    
    if (cache[id]) {
      return cache[id];
    }

    const url = `${import.meta.env.VITE_TMDB_API_URL}/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      
      setCache((prevCache) => ({ ...prevCache, [id]: data }));
      return data;
    } catch (error) {
      throw new Error('Could not fetch movie details. Please try again later.');
    }
  };

  return fetchMovieDetail;
};