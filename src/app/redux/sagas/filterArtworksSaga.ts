import { put, takeLatest, select } from 'redux-saga/effects';
import { SET_CURRENT_ARTWORKS, APPLY_FILTER } from '../actions';

export const getState = (state: any) => state.app;

function* FilterArtworks(action: any): any {
    try {
        const state = yield select(getState);
        const appliedFilters = state.appliedFilters;
        const { category, price } = appliedFilters;
        const artworks = state.allArtworks;
        let currentArtworks = [...artworks];
        if (!category.length && !Object.keys(price).length) {
            yield put({ type: SET_CURRENT_ARTWORKS, payload: artworks });
        }
        if (category.length) {
            currentArtworks = currentArtworks.filter(item => {
                return category.includes(item.category)
            })
            yield put({ type: SET_CURRENT_ARTWORKS, payload: currentArtworks });
        }
        if (Object.keys(price).length) {

            const updatedArr = currentArtworks.filter((item: any) => {
                if (item.price < price.max && item.price > price.min) {
                    return item;
                }
            })
            console.log(updatedArr);
            yield put({ type: SET_CURRENT_ARTWORKS, payload: updatedArr });
        }
    } catch (e) {
        console.log('error', e)
    }
}

export default function* FilterArtworksSaga() {
    yield takeLatest(APPLY_FILTER, FilterArtworks);
}
