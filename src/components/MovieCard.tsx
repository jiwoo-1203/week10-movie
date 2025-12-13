import { memo } from "react";
import type { Movie } from "../types";

interface Props {
  movie: Movie;
  onClick: () => void;
}

function MovieCard({ movie, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:scale-105 transition"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="rounded-lg"
      />
      <h3 className="mt-2 text-sm">{movie.title}</h3>
    </div>
  );
}

export default memo(MovieCard);
