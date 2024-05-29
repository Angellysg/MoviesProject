import React, { useState, useEffect } from 'react';
import { TextField, Grid, Box, Container } from '@mui/material';
import useMovies from '../hooks/useMovies';
import MovieCard from './MovieCard';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const { movies, searchMovies, loading } = useMovies();

  useEffect(() => {
    if (query.length > 0) {
      const delayDebounceFn = setTimeout(() => {
        searchMovies(query);
      }, 300); // 300ms delay for debouncing

      return () => clearTimeout(delayDebounceFn);
    }
  }, [query, searchMovies]);

  return (
    <Container>
      <Box 
        sx={{ 
          padding: '20px', 
          marginTop: '20px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexDirection: 'column' 
        }}
      >
        <TextField
          label="Search Movie"
          placeholder="Type to search..."
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            backgroundColor: 'white', // Fondo blanco
            borderRadius: '4px', // Bordes redondeados
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra ligera
            marginBottom: '20px', // Margen inferior
            maxWidth: '600px' // Ancho máximo para centrarlo
          }}
        />
        {loading && <p>Loading...</p>}
        {query.length > 0 && (
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {movies.map((movie) => (
              <Grid item key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default MovieSearch;
