import React from 'react';
import Favorites from '../context/Favorites';
import { Box } from '@mui/material';

const FavoritesView = () => {
  return (
    <Box p={2} sx={{height:"520px"}}> 
      <Favorites/>
    </Box>
  );
};

export default FavoritesView;
