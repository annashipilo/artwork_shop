import React from 'react';
import Sort from './Sort/Sort.connect';
import Filter from './Filter/Filter.connect';
import Products from './Products/Products.connect';
import ToggleFilter from './ToggleFilter/ToggleFilter.connect';
import MobileFilterWrapper from './MobileFilterWrapper/MobileFilterWrapper.connect'
import './style.scss';

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list__header">
        <h3 className="title">Photography 
          <span className="product-list__header-divider">/</span> 
          <span className="title--not-active">Premium Photos</span>
        </h3>
        <Sort />
        <ToggleFilter />
      </div>
      <div className="product-list__content">
        <Filter />
        <MobileFilterWrapper />
        <Products />
      </div>
    </div>
  );
}

export default ProductList;