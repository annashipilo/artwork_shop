export interface ArtworkImage {
    src: string;
    alt: string;
}

export interface ArtworkDetails {
    dimmentions: {
        width: number;
        heigth: number;
    }
    size: number;
    description: string;
    recommendations: ArtworkImage[];
}

export interface Artwork {
    name: string,
    category: string,
    price: number,
    currency: string,
    image: ArtworkImage,
    id: number,
    bestseller: boolean,
    featured: boolean,
    details: ArtworkDetails | null
}

export interface Sorting{
    isAscending: boolean,
    value: string
}