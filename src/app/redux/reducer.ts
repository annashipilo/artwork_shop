import { SET_ARTWORKS, SET_FEATURED_ARTWORK, ADD_TO_CART, CLEAR_CART, SHOW_CART } from './actions';
import { Artwork } from '../../interfaces';

// interface State {
//   artworks: Artwork[];
//   featuredArtwork: Artwork | null;
//   cart: Artwork[];
// }

const initialState = {
  artworks: [],
  featuredArtwork: null,
  cart: [] as Artwork[],
  isCartShown: false,
}

export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ARTWORKS:
      return { ...state, artworks: action.payload }
    case SET_FEATURED_ARTWORK:
      return { ...state, featuredArtwork: action.payload }
    case ADD_TO_CART:
      const cart = [...state.cart, action.payload];
      const uniqItems = Array.from(new Set(cart));
      return { ...state, cart: uniqItems }
    case CLEAR_CART:
      return { ...state, cart: [] }
    case SHOW_CART:
      return { ...state, isCartShown: action.payload }
    default:
      return state
  }
}