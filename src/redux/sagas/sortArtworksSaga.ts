import { put, takeLatest, select } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { Artwork } from '../../interfaces';
import { SET_CURRENT_ARTWORKS, CHANGE_SORT } from '../actions';
import { RootState } from '../store'; 

export const getState = (state: RootState) => state.app;

const sortByPrice = (allArtworks: Artwork[], isAscending: boolean) => {
    return [
        ...allArtworks.sort((a: Artwork, b: Artwork) => {
            return isAscending ? a.price - b.price : b.price - a.price;
        })
    ]
}

const sortByAlphabet = (allArtworks: Artwork[], isAscending: boolean) => {
    return [
        ...allArtworks.sort((a: Artwork, b: Artwork) => {
            const sign = isAscending ? 1 : -1;
            if (a.name < b.name) { return sign * -1; }
            if (a.name > b.name) { return sign * 1; }
            return 0;
        })
    ]
}

function* SortArtworks(action: PayloadAction<{value: string; isAscending: boolean}>): any {
    try {
        const { value, isAscending } = action.payload;
        const state = yield select(getState);
        let artworks;
        if (value === 'price') {
            artworks = sortByPrice(state.currentArtworks, isAscending);
        } else {
            artworks = sortByAlphabet(state.currentArtworks, isAscending);
        }

        yield put({ type: SET_CURRENT_ARTWORKS, payload: artworks });
    } catch (e) {
        console.log('error', e)
    }
}

export default function* SortArtworksSaga() {
    yield takeLatest(CHANGE_SORT, SortArtworks);
}
