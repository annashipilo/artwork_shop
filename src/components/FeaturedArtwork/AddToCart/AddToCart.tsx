import React from 'react';
import './style.css'

interface AddToCartProps {
    id: number;
}

const AddToCart = ({id}: AddToCartProps) => {
    return (
        <button className="featured-artwork__btn-add">Add to cart</button>
    );
}

export default AddToCart;