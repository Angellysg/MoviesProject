import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import HomeView from './views/HomeView';
import LatestReleasesView from './views/LatestReleasesView';
import PopularView from './views/PopularView'; // Importa la vista PopularView
import SearchView from './views/SearchView'; // Importa la vista SearchView
import FavoritesView from './views/FavoritesView'; // Importa la vista FavoritesView
import Error404 from './views/Error404'; // Importa la vista Error404

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/latest-releases" element={<LatestReleasesView />} />
        <Route path="/popular" element={<PopularView />} /> {/* Agrega la ruta para PopularView */}
        <Route path="/search" element={<SearchView />} /> {/* Agrega la ruta para SearchView */}
        <Route path="/favorites" element={<FavoritesView />} /> {/* Agrega la ruta para FavoritesView */}
        <Route path="*" element={<Error404 />} /> {/* Agrega la ruta para Error404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
