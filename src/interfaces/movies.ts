export interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
    movies: {
        imdbID: string;
        Title: string;
        Poster: string;
        Ratings: Array<{
            Source: string;
            Value: string;
        }>;
        Runtime: string;
    }
}