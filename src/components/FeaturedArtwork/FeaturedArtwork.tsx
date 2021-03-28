import React, { useEffect } from 'react';
import { Artwork as ArtworkInterface } from '../../interfaces';
import AddToCart from '../AddToCart/AddToCart.connect';
import ArtworkDetails from './ArtworkDetails/ArtworkDetails';
import './style.scss'

interface FeaturedArtworkProps {
    initArtworks(): void;
    artwork: ArtworkInterface;
}

const FeaturedArtwork = ({ initArtworks, artwork }: FeaturedArtworkProps) => {
    useEffect(() => {
        initArtworks();
    }, []);

    return (
        <div className="featured-artwork">
            {artwork && <>
                <div className="featured-artwork__header">
                    <h2 className="featured-artwork__title">{artwork.name}</h2>
                    <div className="featured-artwork__img-wrapper featured-artwork__img-wrapper--mobile">
                        <img className="featured-artwork__img" src={artwork.image?.src} alt={artwork.image?.alt} />
                        <div className="featured-artwork__img-label">Photo of the day</div>
                    </div>
                    <div className="featured-artwork__add-to-cart">
                        <AddToCart id={artwork.id} />
                    </div>
                </div>
                <div className="featured-artwork__img-wrapper">
                    <img className="featured-artwork__img" src={artwork.image?.src} alt={artwork.image?.alt} />
                    <div className="featured-artwork__img-label">Photo of the day</div>
                </div>
                <ArtworkDetails artwork={artwork} />
            </>}
        </div>
    );
}

export default FeaturedArtwork;