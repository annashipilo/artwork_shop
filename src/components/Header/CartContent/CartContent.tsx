import React from 'react';
import { Artwork } from '../../../interfaces';
import './style.scss';

interface CartContentProps {
    cart: Artwork[],
    clearCart(): void,
    showCart(state: boolean): void;
}

const CartContent = ({ cart, clearCart, showCart }: CartContentProps) => {
    const clearCartContent = () => {
        clearCart();
        showCart(false);
    }
    return (
        <div className="cart-content">
            <div className="cart-content__close-btn">
                <img src="/assets/cross-icon.jpg" alt="cross-icon" onClick={() => showCart(false)} />
            </div>
            <div className="cart-content__list">
                {
                    cart.map(item => {
                        return <div key={item.id} className="cart-content__item">
                            <div>
                                <p className="cart-content__item-title">{item.name}</p>
                                <p className="cart-content__item-price">$ {item.price}</p>
                            </div>
                            <div className="cart-content__img-wrapper">
                                <img className="cart-content__img" src={item.image.src} alt={item.image.alt} />
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="cart-content__footer">
                <button className="btn cart-content__clear-btn" onClick={clearCartContent}>Clear</button>
            </div>
        </div>)
}

export default CartContent;