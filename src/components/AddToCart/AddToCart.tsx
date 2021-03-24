import React from 'react';
import './style.scss'

interface AddToCartProps {
    id: number;
    addToCart(id: number): void;
}

const AddToCart = ({ id, addToCart }: AddToCartProps) => {
    return (
        <button 
            className="add-to-cart-btn" 
            onClick={() => addToCart(id)}>
            Add to cart
        </button>
    );
}

export default AddToCart;