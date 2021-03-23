import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { INIT_ARTWORKS, SET_ARTWORKS, SET_FEATURED_ARTWORK } from './actions';
// import Api from '...'

function* fetchArtworks(): any {
    try {
        //   const artworks = yield call(Api.fetchArtworks, action.payload.userId);
        const response = yield call(fetch, '/data.json');
        const responseBody = yield response.json();
        const [featuredArtwork, notFeaturedArtworks] = yield call(filterArtworks, responseBody.products)
        
        yield put({ type: SET_ARTWORKS, payload: notFeaturedArtworks });
        yield put({ type: SET_FEATURED_ARTWORK, payload: featuredArtwork });
    } catch (e) {
        console.log('error', e)
        //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export default function* fetchArtworksSaga() {
    yield takeLatest(INIT_ARTWORKS, fetchArtworks);
}

function filterArtworks(artworks: any[]): [{}, []]{
    let featuredArtwork: any;
    const notFeaturedArtworks: any = [];
    artworks.forEach((item) => {
        if(item.featured){
            featuredArtwork = item;
        } else {
            notFeaturedArtworks.push(item);
        }
    })
    return [featuredArtwork, notFeaturedArtworks]
}