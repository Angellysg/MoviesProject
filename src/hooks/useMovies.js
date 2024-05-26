import axios from "axios";
import { useState } from "react";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = '803a06d116a4cbbaba13c042e350b653'; // Reemplaza con tu clave de API de TMDB
  const BASE_URL = 'https://api.themoviedb.org/3';

  async function getMovies(filterCategory = 'now_playing', page = 1) { // Cambiado a 'now_playing'
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
  }

  async function getMovie(idMovie) {
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
  }

  function changePage(newPage) {
    setPage(newPage);
  }

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
