import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box, Button } from '@mui/material';
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
    <Container style={{ position: 'relative', marginTop: '20px' }}>
      {movie && movie.backdrop_path ? (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            marginBottom: '20px',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, // Cambiado a resolución original
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Capa gris semi-transparente
              borderRadius: '8px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              zIndex: 1, // Asegura que esté sobre la capa gris
            }}
          >
            <Typography variant="h3" gutterBottom>{movie.title}</Typography>
            <Typography variant="body1" paragraph>{movie.overview}</Typography>
            <Typography variant="body2" color="textSecondary">Release Date: {movie.release_date}</Typography>
            <Typography variant="body2" color="textSecondary">Rating: {movie.vote_average}</Typography>
            {/* Placeholder para el botón de trailer */}
            {/* Este botón puede ser modificado según cómo obtienes y muestras los trailers */}
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Watch Trailer
            </Button>
          </div>
        </div>
      ) : (
        <Typography variant="h6" color="error" align="center">No movie details available</Typography>
      )}
    </Container>
  );
};

export default MovieDetail;
