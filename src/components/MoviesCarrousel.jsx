import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container } from '@mui/material';
import useMovies from '../hooks/useMovies';

const MoviesCarrousel = () => {
  const { movies, getMovies } = useMovies();

  React.useEffect(() => {
    getMovies('Latest Releases'); 
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container maxWidth="xl" sx={{ padding: 0 }}> {/* Contenedor principal */}
      <Box sx={{ width: '100%' }}> {/* Contenido del carrusel */}
        <Slider {...settings}>
          {movies.map((movie) => (
            <Box key={movie.id} sx={{ padding: '10px' }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
              <Typography variant="subtitle1" sx={{ textAlign: 'center', marginTop: '10px' }}>
                {movie.title}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
  
    </Container>
  );
};

export default MoviesCarrousel;