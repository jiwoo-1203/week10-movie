import { useCallback, useState } from "react";
import type { Movie } from "../types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [includeAdult, setIncludeAdult] = useState(false);
  const [language, setLanguage] = useState("ko-KR");

  const search = useCallback(async () => {
    if (!query.trim()) return;

    const url =
      `${BASE_URL}/search/movie` +
      `?api_key=${API_KEY}` +
      `&query=${encodeURIComponent(query)}` +
      `&include_adult=${includeAdult}` +   // ✅ 여기!!!
      `&language=${language}`;              // ✅ 여기!!!

    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results ?? []);
  }, [query, includeAdult, language]);

  return {
    movies,
    query,
    includeAdult,
    language,
    setQuery,
    setIncludeAdult,
    setLanguage,
    search,
  };
}
