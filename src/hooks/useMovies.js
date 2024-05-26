import axios from "axios";
import { useState, useCallback } from "react";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = '803a06d116a4cbbaba13c042e350b653'; // Reemplaza con tu clave de API de TMDB
  const BASE_URL = 'https://api.themoviedb.org/3';

  const getMovies = useCallback(async (filterCategory = 'now_playing', page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${filterCategory}`, {
        params: {
          api_key: API_KEY,
          page: page,
        },
      });
      setTotalPages(response.data.total_pages);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, []);

  const getMovie = async (idMovie) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${idMovie}`, {
        params: {
          api_key: API_KEY,
        },
      });
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return {
    movies,
    movie,
    getMovies,
    getMovie,
    changePage,
    totalPages,
    page,
  };
}
