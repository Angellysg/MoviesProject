import React from 'react';
import { Box } from '@mui/material';
import MovieSearch from '../components/MovieSearch';

const SearchView = () => {
  return (
    <Box sx={{ minHeight: '79vh', display: 'flex', flexDirection: 'column' }}>
        <MovieSearch sx={{ flexGrow: 1, mt: 8, mb: 8, display: 'flex', justifyContent: 'center', alignItems: 'start' }} /> 
    </Box>
  );
};

export default SearchView;
