import { useState } from "react";
import { genreDataLoadingContext } from "./contextsPrototypes";
import { readMoviesByGenre } from "../API/movieReviewsAPI";

function SciFiMoviesLoadContext({ children }) {
    const [isGenreDataLoading, setIsGenreDataLoading] = useState(true);
    const [genreFilteredData, setGenreFilteredData] = useState([]);

    const getMoviesByGenre = async (specificGenres) => {
        try {
            const data = await readMoviesByGenre(specificGenres);
            if (data) setGenreFilteredData(data);
        } catch (error) {
            console.log("Sci-fi movies not found: ", error);
        } finally {
            setIsGenreDataLoading(false);
        }
    }

    return (
        <genreDataLoadingContext.Provider value={{ isGenreDataLoading, genreFilteredData, getMoviesByGenre }}>
            {children}
        </genreDataLoadingContext.Provider>
    );
}

export default SciFiMoviesLoadContext;