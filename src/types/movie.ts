import { ReactNode } from 'react';

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export type MovieDetails = {
  backdrop_path: any;
  poster_path: any;
  genres: { id: number; name: string }[];
  vote_average: any;
  runtime: ReactNode;
  title: string;
  overview: string;
  release_date: string;
};
