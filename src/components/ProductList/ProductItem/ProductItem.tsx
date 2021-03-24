import React from 'react';
import { Artwork as ArtworkInterface } from '../../../interfaces';
import './styles.scss';

interface ProductItemProps{
    artwork: ArtworkInterface;
}

const ProductItem = ({artwork}: ProductItemProps) => {
    return <div className="product-item">
        <img className="product-item__img" src={artwork.image.src} alt={artwork.image.alt} />
        <p className="category-title">{artwork.category}</p>
        <p className="title">{artwork.name}</p>
        <p className="product-item__price">${artwork.price}</p>
    </div>
}

export default ProductItem;