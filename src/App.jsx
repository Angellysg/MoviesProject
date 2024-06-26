import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import HomeView from './views/HomeView';
import LatestReleasesView from './views/LatestReleasesView';
import PopularView from './views/PopularView';
import SearchView from './views/SearchView';
import FavoritesView from './views/FavoritesView';
import Error404 from './views/Error404';
import MovieDetailView from './views/MovieDetailView';
import { FavoritesProvider } from './context/FavoritesContext';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/latest-releases" element={<LatestReleasesView />} />
        <Route path="/popular" element={<PopularView />} />
        <Route path="/search" element={<SearchView />} />
        <Route 
          path="/favorites" 
          element={
            <FavoritesProvider>
              <FavoritesView />
            </FavoritesProvider>
          } 
        />
        <Route 
          path="/movie/:id" 
          element={
            <FavoritesProvider>
              <MovieDetailView />
            </FavoritesProvider>
          } 
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;