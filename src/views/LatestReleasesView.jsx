import React from 'react';
import MovieCard from '../components/MovieCard'; // Corregir importación del componente MovieCard
import { Box } from '@mui/material';

const LatestReleasesView = () => { // Corregir nombre de la función LatestReleasesView
  return (
    <Box sx={{ }}>
     <MovieCard/> {/* Corregir el nombre del componente a MovieCard */}
    
    </Box>
  );
}

export default LatestReleasesView; // Corregir exportación del componente
