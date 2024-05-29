import React from 'react';
import { Box, CircularProgress, Grid, Typography, Pagination } from '@mui/material';
import MovieCard from '../components/MovieCard'; 
import useMovies from '../hooks/useMovies'; 

const LatestReleasesView = () => {
  const { movies, loading, error, page, totalPages, changePage } = useMovies();

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" color="error">
          Error fetching movies: {error.message}
        </Typography>
      </Box>
    );
  }

  const handlePageChange = (event, value) => {
    changePage(value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Latest Releases
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {movies.map((movie) => (
          <Grid item key={movie.id} sx={{ display: 'flex', justifyContent: 'center' }}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination 
          count={totalPages} 
          page={page} 
          onChange={handlePageChange} 
          color="primary" 
          size="large" 
        />
      </Box>
    </Box>
  );
};

export default LatestReleasesView;
