import React from 'react';
import Header from './components/Header/Header';
import FeaturedArtwork from './components/FeaturedArtwork/FeaturedArtwork.connect';
import ProductList from './components/ProductList/ProductList';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <FeaturedArtwork />
      <ProductList />
    </div>
  );
}

export default App;
