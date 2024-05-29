import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box, Button, Card, CardMedia, Dialog, DialogContent, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import useMovies from '../hooks/useMovies';
import { FavoritesContext } from '../context/FavoritesContext';

const MovieDetail = () => {
  const { id } = useParams();
  const { movie, getMovie, loading, error } = useMovies();
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(`Fetching details for movie ID: ${id}`);
    getMovie(id);
  }, [id, getMovie]);

  useEffect(() => {
    console.log('Movie data:', movie);
    console.log('Loading:', loading);
    console.log('Error:', error);
  }, [movie, loading, error]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

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

  const trailer = movie?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
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
              filter: 'brightness(50%)',
            }}
          ></div>
          <Container style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
            <Card sx={{ width: 300, marginRight: 4, boxShadow: 'none', backgroundColor: 'transparent' }}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{ borderRadius: 2 }}
              />
            </Card>
            <div style={{ color: '#fff', textAlign: 'left', maxWidth: '60%' }}>
              <Typography variant="h3" gutterBottom>{movie.title}</Typography>
              <Typography variant="body1" paragraph>{movie.overview}</Typography>
              <Typography variant="body2" color="textSecondary">Release Date: {movie.release_date}</Typography>
              <Typography variant="body2" color="textSecondary">Rating: {movie.vote_average}</Typography>
              <Typography variant="body2" color="textSecondary">Genres: {movie.genres.map(genre => genre.name).join(', ')}</Typography>
              {trailer && (
                <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={handleOpen}>
                  Watch Trailer
                </Button>
              )}
              <Box display="flex" alignItems="center" marginTop={2}>
                <IconButton onClick={handleFavoriteClick} style={{ color: isFavorite(movie.id) ? 'yellow' : 'white' }}>
                  <StarIcon />
                  <Typography variant="body2" color="textSecondary" style={{ marginLeft: 8 }}>Add to Favorites</Typography>
                </IconButton>
              </Box>
            </div>
          </Container>
          <Dialog open={open} onClose={handleClose} maxWidth="100%" fullWidth>
            <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', top: 5, right: 5, color: '#fff', zIndex: 2 }}>
              <CloseIcon />
            </IconButton>
            <DialogContent style={{ padding: 0, backgroundColor: '#000' }}>
              <iframe
                width="100%"
                height="600"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 8 }}
              ></iframe>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <Typography variant="h6" color="error" align="center">No movie details available</Typography>
      )}
    </div>
    
  );
};

export default MovieDetail;