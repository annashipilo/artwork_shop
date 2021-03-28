import { call, put, takeLatest } from 'redux-saga/effects';
import { Artwork } from '../../interfaces';
import { getArtworks } from '../../api/fauna-artworks';
import { INIT_ARTWORKS, SET_ALL_ARTWORKS, SET_CURRENT_ARTWORKS, SET_FEATURED_ARTWORK, DEFINE_CATEGORIES } from '../actions';

function* fetchArtworks(): any {
    try {
        const products = yield call(getArtworks);
        const featuredArtwork = products.find((item: Artwork) => item.featured);
        const currentArtworks = products.filter((item: Artwork) => !item.featured);
        const categories = defineCategories(products);

        yield put({ type: SET_ALL_ARTWORKS, payload: products });
        yield put({ type: SET_CURRENT_ARTWORKS, payload: currentArtworks });
        yield put({ type: SET_FEATURED_ARTWORK, payload: featuredArtwork });
        yield put({ type: DEFINE_CATEGORIES, payload: categories })
    } catch (e) {
        console.log('error', e)
    }
}

export default function* fetchArtworksSaga() {
    yield takeLatest(INIT_ARTWORKS, fetchArtworks);
}

function defineCategories(artworks: Artwork[]) {
    const categories = [] as string[];
    artworks.forEach(item => {
        if (categories.includes(item.category)) {
            return;
        }
        categories.push(item.category);
    })

    return categories;
}