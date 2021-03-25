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
            {artworks?.length ? 
                artworks.map((item) => {
                    return <ProductItem artwork={item} key={item.id} />
                }) : 
                <h3 className="title">There are no products</h3>
            }
        </div>
    )
}

export default Products;