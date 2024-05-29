import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, CircularProgress, Box, Button } from '@mui/material';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
          },
        });
        setMovie(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

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
      {movie && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '400px',
            marginBottom: '20px',
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
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
            {/* Agrega el botón para mostrar el video del trailer */}
            {movie.video && (
              <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Watch Trailer
              </Button>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default MovieDetail;

