import { put, takeLatest, select } from 'redux-saga/effects';
import { SET_CURRENT_ARTWORKS, APPLY_FILTER } from '../actions';
import { Artwork, Filters as FiltersInterface } from '../../interfaces';
import { RootState } from '../store'; 

const getState = (state: RootState) => state.app;

function* FilterArtworks(): any {
    try {
        const state = yield select(getState);
        const appliedFilters = state.appliedFilters;
        const { category, price } = appliedFilters;
        const artworks = state.allArtworks;

        let currentArtworks = [...artworks.filter((art: Artwork) => !art.featured)];
        if (!category.length && !Object.keys(price).length) {
            yield put({ type: SET_CURRENT_ARTWORKS, payload: currentArtworks });
        }
        if (category.length) {
            currentArtworks = currentArtworks.filter(item => {
                return category.includes(item.category)
            })
            yield put({ type: SET_CURRENT_ARTWORKS, payload: currentArtworks });
        }
        if (Object.keys(price).length) {

            const updatedArr = currentArtworks.filter((item: FiltersInterface) => {
                if (item.price < price.max && item.price > price.min) {
                    return item;
                }
                return false;
            })
            yield put({ type: SET_CURRENT_ARTWORKS, payload: updatedArr });
        }
    } catch (e) {
        console.log('error', e)
    }
}

export default function* FilterArtworksSaga() {
    yield takeLatest(APPLY_FILTER, FilterArtworks);
}
