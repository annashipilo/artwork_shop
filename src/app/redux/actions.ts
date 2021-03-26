import { Artwork, Sorting } from '../../interfaces';

export const SET_ALL_ARTWORKS = 'artworks/setAll';
export const SET_CURRENT_ARTWORKS = 'artworks/setCurrent';
export const INIT_ARTWORKS = 'artworks/init';
export const SET_FEATURED_ARTWORK = 'artworks/setFeatured';
export const ADD_TO_CART = 'cart/addToCart';
export const CLEAR_CART = 'cart/clear';
export const SHOW_CART = 'cart/show';
export const CHANGE_SORT = 'sort/changeSort';
export const DEFINE_CATEGORIES = 'filter/defineCategories';
export const APPLY_FILTER = 'filter/apply';
export const SHOW_FILTER = 'filter/show';
export const CLEAR_FILTER = 'filter/clear';

export function initArtworks() {
  return {
    type: INIT_ARTWORKS,
  }
}

export function setArtworks(artworks: Artwork[]) {
  return {
    type: SET_ALL_ARTWORKS,
    payload: artworks,
  }
}

export function setCurrentArtworks(artworks: Artwork[]) {
  return {
    type: SET_CURRENT_ARTWORKS,
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
    const artworks = getState().app.allArtworks;
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

export function changeSort(payload: Sorting){
  return {
    type: CHANGE_SORT,
    payload,
  }
}

export function applyFilter(payload: any){
  return {
    type: APPLY_FILTER,
    payload
  }
} 

export function showFilter(state: boolean){
  return {
    type: SHOW_FILTER,
    payload: state
  }
}

export function clearFilter(){
  return {
    type: CLEAR_FILTER
  }
}