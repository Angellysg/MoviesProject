import React from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import './App.css'; // Importa el archivo CSS global

import LatestReleasesView from './views/LatestReleasesView';

function App() {
  return (
    <>
      <Header />
      <LatestReleasesView />
      <Footer />
    </>
  );
}

export default App;
