import React from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import './App.css'; // Importa el archivo CSS global
import HomeView from './views/HomeView';

function App() {
  return (
    <>
      <Header />
      <HomeView />
      <Footer />
    </>
  );
}

export default App;
