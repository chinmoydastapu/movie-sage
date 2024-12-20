import { useEffect, useState } from "react";
import { readMovieReviews } from "../API/movieReviewsAPI";
import { DataLoadingContext } from "./contextsPrototypes";

function DataLoadContext({ children }) {
    const [isAllDataLoading, setIsAllDataLoading] = useState(true);
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const movies = await readMovieReviews();

                if (movies) setMoviesData(movies);
            } finally {
                setIsAllDataLoading(false);
            }
        }

        getAllMovies();
    }, []);

    return (
        <DataLoadingContext.Provider value={{ isAllDataLoading, moviesData }}>
            {children}
        </DataLoadingContext.Provider>
    );
}

export default DataLoadContext;