import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#2c3e50' }}>
      <Toolbar>
        {/* Navbar a la izquierda */}
        <Box display="flex" alignItems="center">
          <Button color="inherit" sx={{ borderRadius: 0, '&:focus': { outline: 'none' } }}>Home</Button>
          <Button color="inherit" sx={{ borderRadius: 0, '&:focus': { outline: 'none' } }}>Latest releases</Button>
          <Button color="inherit" sx={{ borderRadius: 0, '&:focus': { outline: 'none' } }}>Popular</Button>
          <Button color="inherit" sx={{ borderRadius: 0, '&:focus': { outline: 'none' } }}>Search</Button>
        </Box>

        {/* Espacio flexible para empujar el botón "Favoritos" hacia la derecha */}
        <Box flexGrow={1} />

        {/* Botón "Favoritos" a la derecha */}
        <IconButton color="inherit" aria-label="Favoritos" sx={{ borderRadius: 0, '&:focus': { outline: 'none' } }}>
          <Box display="flex" alignItems="center">
            <Typography variant="body1" mr={1}>
              Favorites
            </Typography>
            <StarIcon style={{ color: '#e67e22' }} />
          </Box>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;