export interface ArtworkImage {
    src: string;
    alt: string;
}

export interface FeaturedArtwork {
    name: string;
    category: string;
    price: number;
    currency: string;
    image: ArtworkImage;
    id: number;
    bestseller: boolean;
    featured: boolean;
    details: {
        dimmentions: {
            width: number;
            heigth: number;
        }
        size: number;
        description: string;
        recommendations: ArtworkImage[];
    }
}