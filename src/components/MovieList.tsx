import { useMemo } from "react";
import MovieCard from "./MovieCard";
import type { Movie } from "../types";

interface Props {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieList({ movies, onSelect }: Props) {
  const rendered = useMemo(
    () =>
      movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onSelect(movie)}
        />
      )),
    [movies, onSelect]
  );

  return <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{rendered}</div>;
}
