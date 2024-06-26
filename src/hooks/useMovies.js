import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const useMovies = (initialCategory = 'now_playing') => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
          append_to_response: 'videos' // Incluimos la información de videos
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

  const loadFavorites = useCallback(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = useCallback((movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }, [favorites]);

  const removeFromFavorites = useCallback((id) => {
    const updatedFavorites = favorites.filter(movie => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }, [favorites]);

  const isFavorite = useCallback((id) => {
    return favorites.some(movie => movie.id === id);
  }, [favorites]);

  useEffect(() => {
    getMovies(initialCategory, page);
    loadFavorites();
  }, [getMovies, page, initialCategory, loadFavorites]);

  return {
    movies,
    movie,
    getMovies,
    getMovie,
    searchMovies,
    changePage,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    favorites,
    totalPages,
    page,
    loading,
    error,
  };
};

export default useMovies;
