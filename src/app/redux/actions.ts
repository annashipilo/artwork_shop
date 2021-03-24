import { Artwork } from '../../interfaces';

export const SET_ARTWORKS = 'SET_ARTWORKS';
export const INIT_ARTWORKS = 'INIT_ARTWORKS';
export const SET_FEATURED_ARTWORK = 'SET_FEATURED_ARTWORK';
export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const SHOW_CART = 'SHOW_CART';

export function initArtworks() {
  return {
    type: INIT_ARTWORKS,
  }
}

export function setArtworks(artworks: Artwork[]) {
  return {
    type: SET_ARTWORKS,
    payload: artworks,
  }
}

export function setFeaturedArtwork(artwork: Artwork) {
  return {
    type: SET_FEATURED_ARTWORK,
    payload: artwork,
  }
}

export function addToCart(id: number){
  return (dispatch: any, getState: any) => {
    const artworks = getState().app.artworks;
    const addedItem = artworks.find((item: Artwork) => item.id === id);
    dispatch( {
      type: ADD_TO_CART,
      payload: addedItem
    })
    dispatch( {
      type: SHOW_CART,
      payload: true
    })
  }
}

export function clearCart(){
  return {
    type: CLEAR_CART
  }
}

export function showCart(state: boolean){
  return {
    type: SHOW_CART,
    payload: state
  }
}