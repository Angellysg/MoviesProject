import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const useMovies = (category = 'now_playing') => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '803a06d116a4cbbaba13c042e350b653';
  const BASE_URL = 'https://api.themoviedb.org/3';

  const getMovies = useCallback(async (filterCategory = category, pageNumber = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/movie/${filterCategory}`, {
        params: {
          api_key: API_KEY,
          page: pageNumber,
        },
      });
      setTotalPages(response.data.total_pages);
      setMovies(response.data.results);
    } catch (error) {
      setError(error);
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, [API_KEY, BASE_URL, category]);

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
  }, [API_KEY, BASE_URL]);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    getMovies(category, page);
  }, [getMovies, page, category]);

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
};

export default useMovies;
