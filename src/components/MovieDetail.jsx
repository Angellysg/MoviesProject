import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box, Button, Card, CardMedia } from '@mui/material';
import useMovies from '../hooks/useMovies';

const MovieDetail = () => {
  const { id } = useParams();
  const { movie, getMovie, loading, error } = useMovies();

  useEffect(() => {
    console.log(`Fetching details for movie ID: ${id}`);
    getMovie(id);
  }, [id, getMovie]);

  useEffect(() => {
    console.log('Movie data:', movie);
    console.log('Loading:', loading);
    console.log('Error:', error);
  }, [movie, loading, error]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography variant="h6" color="error" align="center">Error loading movie details</Typography>;
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      {movie && movie.backdrop_path ? (
        <>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(50%)', // Oscurece la imagen de fondo para mejor contraste con el texto
            }}
          ></div>
          <Container style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
            <Card sx={{ width: 500, height: 450, marginRight: 4 }}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{ height: '100%', objectFit: 'cover' }} // Asegura que la imagen cubra todo el contenedor
              />
            </Card>
            <div style={{ color: '#fff', textAlign: 'left' }}>
              <Typography variant="h3" gutterBottom>{movie.title}</Typography>
              <Typography variant="body1" paragraph>{movie.overview}</Typography>
              <Typography variant="body2" color="textSecondary">Release Date: {movie.release_date}</Typography>
              <Typography variant="body2" color="textSecondary">Rating: {movie.vote_average}</Typography>
              {movie.video && (
                <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                  Watch Trailer
                </Button>
              )}
            </div>
          </Container>
        </>
      ) : (
        <Typography variant="h6" color="error" align="center">No movie details available</Typography>
      )}
    </div>
  );
};

export default MovieDetail;
