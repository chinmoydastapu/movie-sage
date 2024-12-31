import { useContext } from "react";
import { DataLoadingContext } from "../../contexts/contextsPrototypes";
import LoaderAnimation from "../LottieAnimations/LoaderAnimation";
import MoviePreviewCard from "../Cards/MoviePreviewCard";

function RelatedMovieTab({ data }) {
    // find out related movies
    const { isAllDataLoading, moviesData } = useContext(DataLoadingContext);
    const currentGenres = data?.genres || [];
    const relatedMovies = moviesData
        .filter(movie => movie._id !== data._id && movie?.genres?.some(genre => currentGenres.includes(genre)))
        .sort(() => Math.random() - 0.5)
        .slice(0, 12);

    return (
        <>
            {
                isAllDataLoading ?
                    <div className="w-full h-[100vh] flex items-center justify-center">
                        <LoaderAnimation />
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                        {relatedMovies.map((relatedMovie, idx) => <MoviePreviewCard key={idx} data={relatedMovie} />)}
                    </div>
            }
        </>
    );
}

export default RelatedMovieTab;