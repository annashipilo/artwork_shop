import React, { useState } from 'react';
import { Artwork as ArtworkInterface } from '../../../interfaces';
import AddToCart from '../../AddToCart/AddToCart.connect';
import './styles.scss';

interface ProductItemProps {
    artwork: ArtworkInterface;
}

const ProductItem = ({ artwork }: ProductItemProps) => {
    const [isBtnShown, showBtn] = useState<boolean>(false);

    return (
        <div className="product-item">
            <div 
                className="product-item__img-wrapper" 
                onMouseEnter={() => showBtn(true)}
                onMouseLeave={() => showBtn(false)}>
                <img className="product-item__img" src={artwork.image.src} alt={artwork.image.alt}/>
                {/* {isBtnShown && */}
                    <div className={isBtnShown ? "product-item__btn" : "product-item__btn--hidden"}>
                        <AddToCart id={artwork.id} />
                    </div>
                {/* } */}
            </div>

            <p className="category-title">{artwork.category}</p>
            <p className="title">{artwork.name}</p>
            <p className="product-item__price">${artwork.price}</p>
            {artwork.bestseller && <div className="product-item__bestseller-label">Best Seller</div>}
        </div>
    )
}

export default ProductItem;