import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { Artwork as ArtworkInterface } from '../../../interfaces';
import './style.scss';

interface ProductsProps {
    artworks: ArtworkInterface[];
}

const Products = ({ artworks }: ProductsProps) => {
    return (
        <div className="products">
            {artworks.map((item) => {
                return <ProductItem artwork={item} key={item.id} />
            })}
        </div>
    )
}

export default Products;