import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import useMovies from '../hooks/useMovies';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesCarrouselReusable = ({ category }) => {
  const { movies, getMovies } = useMovies();

  useEffect(() => {
    getMovies(category); // Obtener películas según la categoría especificada
  }, [getMovies, category]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Velocidad de desplazamiento
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Activar el desplazamiento automático
    autoplaySpeed: 3000, // Velocidad del desplazamiento automático
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
    <Box sx={{ width: '100%', marginTop: '30px', marginBottom: '30px' }}> {/* Agregar margen superior e inferior */}
      <Box sx={{ margin: '0 auto', width: '80%' }}> {/* Envoltorio para el carrusel */}
        {movies.length === 0 ? (
          <Typography variant="h6" sx={{ textAlign: 'center' }}>Loading...</Typography>
        ) : (
          <Slider {...settings}>
            {movies.map((movie) => (
              <Box key={movie.id} sx={{ margin: '0 auto', textAlign: 'center' }}> {/* Ajustar el ancho del contenedor de cada película */}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  style={{ 
                    width: '80%', 
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                    marginBottom: '10px',
                    objectFit: 'cover', 
                  }}
                />
                <Typography 
                  variant="subtitle1" 
                  sx={{ fontWeight: 'bold' }}
                >
                  {movie.title}
                </Typography>
              </Box>
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
};

export default MoviesCarrouselReusable;
