import React from 'react';
import MovieCard from '../components/MovieCard'; // Cambiar la importación a MoviesCard
import { Box } from '@mui/material';

const LatestReleasesView = () => { // Corregir el nombre de la función a LatestReleasesView
  return (
    <Box sx={{ }}>
     <MovieCard/> {/* Cambiar el nombre del componente a MoviesCard */}
    </Box>
  );
}

export default LatestReleasesView; // No se necesita ninguna corrección aquí

