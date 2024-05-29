import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Box, CircularProgress, Button } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesCarousel = ({ movies, loading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Activar el desplazamiento automático
    autoplaySpeed: 2200, // Velocidad del desplazamiento automático
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
          <Card key={movie.id} sx={{ margin: 'auto', width: '100%', position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', textAlign: 'center', borderRadius: '8px' }}>
              <Typography variant="h6" sx={{ color: '#000', marginBottom: '10px' }}>{movie.title}</Typography>
              <Typography variant="body1" sx={{ color: '#000', marginBottom: '10px' }}>{movie.overview}</Typography>
              <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">View More</Button>
              </Link>
            </Box>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
              alt={movie.title}
              sx={{ height: 'calc(100vh - 200px)', objectFit: 'cover' }}
            />
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default MoviesCarousel;
