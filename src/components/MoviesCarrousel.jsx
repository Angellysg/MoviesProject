import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesCarrousel = ({ movies, loading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ marginTop: '-54px' }}>
      <Typography variant="h4" gutterBottom>Movies</Typography>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.title.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ margin: 'auto', width: '100%' }}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{ height: 'calc(100vh - 200px)', objectFit: 'cover' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Slider>
    </Box>
  );
};

export default MoviesCarrousel;
