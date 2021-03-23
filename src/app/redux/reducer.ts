import { SET_ARTWORKS, SET_FEATURED_ARTWORK } from './actions';

const initialState = { 
  artworks: [], 
  featuredArtwork: {},
}

export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ARTWORKS:
      return { ...state, artworks: action.payload }
    case SET_FEATURED_ARTWORK:
      return { ...state, featuredArtwork: action.payload }
    default:
      return state
  }
}