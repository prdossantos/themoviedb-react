import { atom } from 'jotai';
import { Movie } from '../types/movie';
import MovieDetails from '../pages/MovieDetails';

export const moviesAtom = atom<any[]>([]);
export const moviesCacheAtom = atom<{ [page: number]: Movie[] }>({});
export const movieDetailsCacheAtom = atom<{ [id: string]: MovieDetails }>({});
