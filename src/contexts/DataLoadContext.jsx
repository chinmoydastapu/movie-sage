import { useEffect, useState } from "react";
import { readMovieReviews } from "../movieReviewsAPI";
import { DataLoadingContext } from "./contextsPrototypes";

function DataLoadContext({ children }) {
    const [isLoadingState, setIsLoadingState] = useState(true);
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const movies = await readMovieReviews();

                if (movies) setMoviesData(movies);
            } finally {
                setIsLoadingState(false);
            }
        }

        getAllMovies();
    }, []);

    return (
        <DataLoadingContext.Provider value={{ isLoadingState, moviesData }}>
            {children}
        </DataLoadingContext.Provider>
    );
}

export default DataLoadContext;