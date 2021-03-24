import { put, takeLatest, select } from 'redux-saga/effects';
import { Artwork } from '../../../interfaces';
import { SET_CURRENT_ARTWORKS, CHANGE_SORT } from '../actions';

export const getState = (state: any) => state.app;

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

function* SortArtworks(action: any): any {
    try {
        const {value, isAscending} = action.payload;
        const state = yield select(getState);
        let artworks;
        if(value === 'price'){
            artworks = sortByPrice(state.allArtworks, isAscending);
        } else {
            artworks = sortByAlphabet(state.allArtworks, isAscending);
        }

        console.log(artworks);
        yield put({ type: SET_CURRENT_ARTWORKS, payload: artworks });
    } catch (e) {
        console.log('error', e)
        //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export default function* SortArtworksSaga() {
    yield takeLatest(CHANGE_SORT, SortArtworks);
}
