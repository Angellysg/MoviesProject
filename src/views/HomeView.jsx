import React from 'react';
import MoviesCarrousel from '../components/MoviesCarrousel';
import MoviesCarrouselReusable from '../components/MoviesCarrouselReusable';
import { Box, Typography } from '@mui/material';

const HomeView = () => {
  return (
    <Box sx={{  }}>
      <Box sx={{  }}>
        <MoviesCarrousel />
      </Box>

      <Box sx={{  }}>
        <Typography variant="h5" sx={{ }}>Popular Movies</Typography>
        <MoviesCarrouselReusable category="popular" />
      </Box>

      <Box sx={{  }}>
        <Typography variant="h5" sx={{ }}>Top Rated Movies</Typography>
        <MoviesCarrouselReusable category="top_rated" />
      </Box>
    </Box>
  );
}

export default HomeView;
