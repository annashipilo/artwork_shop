export const SET_ARTWORKS = 'SET_ARTWORKS';
export const INIT_ARTWORKS = 'INIT_ARTWORKS';
export const SET_FEATURED_ARTWORK = 'SET_FEATURED_ARTWORK';

export function initArtworks() {
    return {
      type: INIT_ARTWORKS,
    }
  }

export function setArtworks(artworks: any[]) {
  return {
    type: SET_ARTWORKS,
    payload: artworks,
  }
}

export function setFeaturedArtwork(artwork: any) {
    return {
      type: SET_FEATURED_ARTWORK,
      payload: artwork,
    }
  }