import { useEffect, useState } from "react";
import { scifiMoviesLoadingContext } from "./contextsPrototypes";
import { readSciFiMovies } from "../API/movieReviewsAPI";

function SciFiMoviesLoadContext({ children }) {
    const [isScifiLoading, setIsScifiLoading] = useState(true);
    const [scifiMovies, setScifiMovies] = useState([]);

    useEffect(() => {
        const getScifiMovies = async () => {
            try {
                const data = await readSciFiMovies();
                if (data) setScifiMovies(data);
            } catch (error) {
                console.log("Sci-fi movies not found: ", error);
            } finally {
                setIsScifiLoading(false);
            }
        }

        getScifiMovies();
    }, []);

    return (
        <scifiMoviesLoadingContext.Provider value={{ isScifiLoading, scifiMovies }}>
            {children}
        </scifiMoviesLoadingContext.Provider>
    );
}

export default SciFiMoviesLoadContext;