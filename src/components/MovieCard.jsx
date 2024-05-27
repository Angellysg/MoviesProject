import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid, Button } from '@mui/material';
import MovieCard from './MovieCard'; // Suponiendo que tienes un componente MovieCard
import useMovies from '../hooks/useMovies'; // Suponiendo que tienes un hook para obtener las películas

const MoviesCard = () => {
  const { movies, loading, error, getMovies } = useMovies();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Establece el número de películas por página

  useEffect(() => {
    getMovies(currentPage);
  }, [getMovies, currentPage]);

  const startIndex = 0; // Comienza desde el principio del arreglo
  const endIndex = startIndex + itemsPerPage; // Termina en el índice correspondiente a itemsPerPage

  const visibleMovies = movies.slice(startIndex, endIndex); // Slice para obtener solo las primeras 20 películas

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <div>Error al cargar las películas.</div>
      ) : (
        <>
          <Grid container spacing={2}>
            {visibleMovies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button disabled={currentPage === 1} onClick={handlePrevPage}>
              Anterior
            </Button>
            <Button onClick={handleNextPage}>Siguiente</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesCard;
