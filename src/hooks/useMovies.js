import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const useMovies = (initialCategory = 'now_playing') => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';

  const getMovies = useCallback(async (category = initialCategory, pageNumber = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/movie/${category}`, {
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
  }, [API_KEY, BASE_URL, initialCategory]);

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

  const searchMovies = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
      console.log('Response from searchMovies:', response.data); // Debug log
      setTotalPages(response.data.total_pages);
      setMovies(response.data.results);
    } catch (error) {
      setError(error);
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  }, [API_KEY, BASE_URL]);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    getMovies(initialCategory, page);
  }, [getMovies, page, initialCategory]);

  return {
    movies,
    movie,
    getMovies,
    getMovie,
    searchMovies,
    changePage,
    totalPages,
    page,
    loading,
    error,
  };
};

export default useMovies;
