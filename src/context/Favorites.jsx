import React, { useContext } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>Favorites</Typography>
      {favorites.length > 0 ? (
        <Grid container spacing={4}>
          {favorites.map(movie => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color="textSecondary">No favorite movies added yet.</Typography>
      )}
    </Container>
  );
};

export default Favorites;
