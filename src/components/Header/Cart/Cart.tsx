import React from 'react';
import { Artwork } from '../../../interfaces';
import CartContent from '../CartContent/CartContent.connect';
import './style.scss';

interface CartProps {
  cart: Artwork[];
  isCartShown: boolean;
  showCart(state: boolean): void;
}

const Cart = ({ cart, isCartShown, showCart }: CartProps) => {
  const openCart = () => {
    if (!cart.length && !isCartShown) {
      return null;
    }
    showCart(!isCartShown)
  }

  return (
    <div className="cart">
      <img src={'/assets/shopping-cart.jpg'} alt="Shopping cart" onClick={openCart} />
      {cart.length !== 0 && <div className="cart__label">{cart.length}</div>}
      {isCartShown && <CartContent />}
    </div>
  );
}

export default Cart;