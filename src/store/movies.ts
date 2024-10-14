import { atom } from 'jotai';
import { ReactNode } from 'react';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface MovieDetails {
  backdrop_path: any;
  poster_path: any;
  genres: any;
  vote_average: any;
  runtime: ReactNode;
  title: string;
  overview: string;
  release_date: string;
}

export const moviesAtom = atom<any[]>([]);
export const moviesCacheAtom = atom<{ [page: number]: Movie[] }>({});
export const movieDetailsCacheAtom = atom<{ [id: string]: MovieDetails }>({});