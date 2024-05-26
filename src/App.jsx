import React from 'react';
import { Container } from '@mui/material';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import MoviesCarrousel from './components/MoviesCarrousel';

function App() {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: '80px' }}>
        <MoviesCarrousel />
      </Container>
      <Footer />
    </>
  );
}

export default App;
