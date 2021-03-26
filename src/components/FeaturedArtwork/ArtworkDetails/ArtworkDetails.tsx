import React from 'react';
import { Artwork } from '../../../interfaces';
import './style.scss';

interface ArtworkDetailsProps {
    artwork: Artwork;
}

const ArtworkDetails = ({ artwork }: ArtworkDetailsProps) => {
    const { name, category, details } = artwork
    return (
        <div className="featured-artwork__details">
            {details && <>
                <div className="featured-artwork__description">
                    <h3 className="title">About the {name}</h3>
                    <p className="category-title">{category}</p>
                    <p className="featured-artwork__text">{details.description}</p>
                </div>
                <div>
                    <div className="featured-artwork__aside-details">
                        <h3 className="title">People also buy</h3>
                        <div className="featured-artwork__recommendations-imgs-wrapper">
                            {
                                details.recommendations.map((item, i) => {
                                    return <img className="featured-artwork__recommendations-imgs" src={item.src} alt={item.alt} key={i} />
                                })
                            }
                        </div>
                    </div>
                    <div className="featured-artwork__aside-details">
                        <h3 className="title">Details</h3>
                        <p className="featured-artwork__text">Size: {details.dimensions.height} x {details.dimensions.width} pixel</p>
                        <p className="featured-artwork__text">Size: {details.size}</p>
                    </div>
                </div>
            </>
            }
        </div >
    )
}

export default ArtworkDetails;