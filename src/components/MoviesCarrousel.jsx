import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import useMovies from '../hooks/useMovies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesCarrousel = () => {
  const { movies, getMovies } = useMovies();

  React.useEffect(() => {
    getMovies('now_playing'); // Utilizar una categoría válida
  }, [getMovies]);

  const settings = {
    dots: true, // Muestra los puntos indicadores de posición
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Muestra las flechas laterales
    autoplay: true, // Activa el movimiento automático
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <Box sx={{ width: '100%' ,marginTop : '-20px' }}>
      {movies.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: 'center' }}>Loading...</Typography>
      ) : (
        <Slider {...settings}>
          {movies.map((movie) => (
            <Box key={movie.id} sx={{ width: '100%' }}> {/* Ajustar el ancho del contenedor de cada película */}
              <Box sx={{ position: 'relative', paddingBottom: '40%', overflow: 'hidden' }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    objectFit: 'cover', 
                  }}
                />
              </Box>
              <Typography 
                variant="subtitle1" 
                sx={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}
              >
                {movie.title}
              </Typography>
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default MoviesCarrousel;
