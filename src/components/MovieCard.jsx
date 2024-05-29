import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.title.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ width: 230, height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardMedia
          component="img"
          height="280"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent sx={{ padding: 1 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 14, textAlign: 'center' }}>
            {movie.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', padding: 1 }}>
          <IconButton aria-label="view movie details">
            <VisibilityIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
};

export default MovieCard;
