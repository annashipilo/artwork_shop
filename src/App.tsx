import React from 'react';
import Header from './components/Header/Header';
import FeaturedArtwork from './components/FeaturedArtwork/FeaturedArtwork.connect';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <FeaturedArtwork />
    </div>
  );
}

export default App;
