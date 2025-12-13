import type { Movie } from "../types";

interface Props {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl"
        >
          ✖
        </button>

        <div className="flex gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            className="rounded"
          />

          <div>
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <p className="text-sm mt-2">개봉일: {movie.release_date}</p>
            <p className="mt-4">{movie.overview}</p>

            <div className="mt-6 flex gap-2">
              <a
                href={`https://www.imdb.com/find?q=${movie.title}`}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                IMDb에서 검색
              </a>
              <button
                onClick={onClose}
                className="border px-4 py-2 rounded"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
