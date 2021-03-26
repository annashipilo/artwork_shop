import {
  SET_ALL_ARTWORKS,
  SET_CURRENT_ARTWORKS,
  SET_FEATURED_ARTWORK,
  ADD_TO_CART,
  CLEAR_CART,
  SHOW_CART,
  CHANGE_SORT,
  DEFINE_CATEGORIES,
  APPLY_FILTER,
  SHOW_FILTER,
  CLEAR_FILTER,
} from './actions';
import { Artwork } from '../../interfaces';

// interface State {
//   artworks: Artwork[];
//   featuredArtwork: Artwork | null;
//   cart: Artwork[];
// }

const initialState = {
  allArtworks: [],
  currentArtworks: [],
  featuredArtwork: null,
  cart: [] as Artwork[],
  isCartShown: false,
  sort: {
    isAscending: true,
    value: "price"
  },
  categories: [],
  appliedFilters: {
    category: [],
    price: []
  },
  isFilterShown: false,
}

export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ALL_ARTWORKS:
      return { ...state, allArtworks: action.payload }
    case SET_CURRENT_ARTWORKS:
      return { ...state, currentArtworks: action.payload }
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
    case CHANGE_SORT:
      return { ...state, sort: action.payload }
    case DEFINE_CATEGORIES:
      return { ...state, categories: action.payload }
    case APPLY_FILTER:
      const filters = { ...state.appliedFilters, ...action.payload }
      return { ...state, appliedFilters: filters }
    case CLEAR_FILTER:
      return { ...state, appliedFilters: initialState.appliedFilters }
    case SHOW_FILTER:
      return { ...state, isFilterShown: action.payload }
    default:
      return state
  }
}