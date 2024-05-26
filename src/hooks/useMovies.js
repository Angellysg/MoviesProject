import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '803a06d116a4cbbaba13c042e350b653'; // Reemplaza con tu clave de API de TMDB
  const BASE_URL = 'https://api.themoviedb.org/3';

  const getMovies = useCallback(async (filterCategory = 'now_playing', page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/movie/${filterCategory}`, {
        params: {
          api_key: API_KEY,
          page: page,
        },
      });
      setTotalPages(response.data.total_pages);
      setMovies(response.data.results);
    
    } finally {
      setLoading(false);
    }
  }, []);

  const getMovie = useCallback(async (idMovie) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/movie/${idMovie}`, {
        params: {
          api_key: API_KEY,
        },
      });
      setMovie(response.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching movie:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    getMovies('now_playing', page);
  }, [getMovies, page]);

  return {
    movies,
    movie,
    getMovies,
    getMovie,
    changePage,
    totalPages,
    page,
    loading,
    error,
  };
}
