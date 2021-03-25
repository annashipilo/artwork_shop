import React, { useState, useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Pagination from '../Pagination/Pagination';
import { Artwork as ArtworkInterface } from '../../../interfaces';
import './style.scss';

interface ProductsProps {
    artworks: ArtworkInterface[];
}

const Products = ({ artworks }: ProductsProps) => {
    const [currentArtworks, setCurrentArtworks] = useState<ArtworkInterface[]>(artworks)
    const [page, setPage] = useState<number>(1);

    console.log('currentArtworks', currentArtworks);
    console.log('artworks', artworks);
    const pageSize = 4;

    const handleChange = (pageIndex = 1) => {
        setPage(pageIndex);
        const a = artworks.slice(pageSize * (pageIndex - 1), pageSize * (pageIndex))
        setCurrentArtworks(a);
    }

    useEffect(() =>{
        handleChange(1);
    }, [artworks])

    return (
        <div>
            <div className="products">
                {currentArtworks?.length ? 
                    currentArtworks.map((item) => {
                        return <ProductItem artwork={item} key={item.id} />
                    }) : 
                    <h3 className="title">There are no products</h3>
                }
            </div>
            <Pagination onChange={handleChange} pageIndex={page} count={Math.ceil(artworks.length / pageSize)}/>
        </div>
    )
}

export default Products;