import React, { useEffect } from 'react';
import { FeaturedArtwork as FeaturedArtworkInterface } from '../../interfaces';
import AddToCart from './AddToCart/AddToCart';
import ArtworkDetails from './ArtworkDetails/ArtworkDetails';
import './style.css'

interface FeaturedArtworkProps {
    initArtworks(): void;
    artwork: FeaturedArtworkInterface;
}

const FeaturedArtwork = ({ initArtworks, artwork }: FeaturedArtworkProps) => {
    useEffect(() => {
        initArtworks();
    }, []);

    return (
        <div className="featured-artwork">
            <div className="featured-artwork__header">
                <h2 className="featured-artwork__title">{artwork.name}</h2>
                <AddToCart id={artwork.id}/>
            </div>
            <div className="featured-artwork__img-wrapper">
                <img className="featured-artwork__img" src={artwork.image?.src} alt={artwork.image?.alt} />
                <div className="featured-artwork__img-label">Photo of the day</div>
            </div>
            <ArtworkDetails artwork={artwork} />
            
        </div>
    );
}

export default FeaturedArtwork;