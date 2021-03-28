import { Artwork } from "../interfaces";

const client = new window.faunadb.Client({ secret: 'fnAEFamI2TACAVc1gJy5jnYi9jEPZ5atpqS6DaN2' });
const q = window.faunadb.query;

const ARTWORK_COLLECTION = 'artworks';
const ARTWORK_INDEX = 'all_artworks';

export const createArtwork = (artwork: Artwork) => {
    client.query(
        q.Create(
            q.Collection(ARTWORK_COLLECTION),
            {
                data: artwork
            },
        )
    )
    .then((ret: any) => console.log(ret))
    .catch((err: any) => console.error('Error: %s', err))
}

export const getArtworks = () => {
    return new Promise((resolve, reject) => {
        client.query(
            q.Paginate(q.Match(q.Index(ARTWORK_INDEX)))
        )
        .then((ret: any) => {
            const refs = ret.data.map((item: any) => item.value.id);
            return client.query(refs.map((ref: any) => q.Get(q.Ref(q.Collection(ARTWORK_COLLECTION), ref))));
        })
        .then((ret: any) => {
            resolve(ret.map((item: any) => item.data));
        })
        .catch((err: any) => reject(err));
    })
}
