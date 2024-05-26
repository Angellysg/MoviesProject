import React from 'react';
import MoviesCarrousel from '../components/MoviesCarrousel';
import MoviesCarrouselReusable from '../components/MoviesCarrouselReusable';
import { Box, Typography } from '@mui/material';

const HomeView = () => {
  return (
    <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto', paddingTop: '80px' }}>
      <Box sx={{ width: '100%' }}>
        <MoviesCarrousel sx={{ width: '100%', margin: 'auto' }} />
      </Box>

      <Box sx={{ width: '100%', margin: '20px 0' }}>
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>Popular Movies</Typography>
        <MoviesCarrouselReusable category="popular" sx={{ width: '80%', margin: 'auto' }} />
      </Box>

      <Box sx={{ width: '100%', margin: '20px 0' }}>
        <Typography variant="h5" sx={{ marginBottom: '10px' }}>Top Rated Movies</Typography>
        <MoviesCarrouselReusable category="top_rated" sx={{ width: '80%', margin: 'auto' }} />
      </Box>
    </Box>
  );
}

export default HomeView;
