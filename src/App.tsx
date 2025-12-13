import { useCallback, useState } from "react";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";
import { useMovies } from "./hooks/useMovies";
import type { Movie } from "./types";

export default function App() {
  const {
    movies,
    query,
    includeAdult,
    language,
    setQuery,
    setIncludeAdult,
    setLanguage,
    search,
  } = useMovies();

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSelect = useCallback((movie: Movie) => {
    setSelectedMovie(movie);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <SearchForm
        query={query}
        includeAdult={includeAdult}
        language={language}
        onQueryChange={setQuery}
        onAdultChange={setIncludeAdult}
        onLanguageChange={setLanguage}
        onSearch={search}
      />

      <div className="mt-8">
        <MovieList movies={movies} onSelect={handleSelect} />
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
