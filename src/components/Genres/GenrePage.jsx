import { useContext } from "react";
import { genreDataLoadingContext } from "../../contexts/contextsPrototypes";
import LoaderAnimation from "../LottieAnimations/LoaderAnimation";
import PaginatedSection from "../PaginatedSection/PaginatedSection";
import BreadcrumbsBanner from "../Headers/BreadcrumbsBanner";

function GenrePage() {
    const { isGenreDataLoading, genreFilteredData, getMoviesByGenre } = useContext(genreDataLoadingContext);

    isGenreDataLoading && getMoviesByGenre(['sci-fi', 'comedy', 'horror']);

    const genrePath = window.location.pathname.split('/');
    const actualGenre = genrePath[genrePath.length - 1];

    let genreData;
    if (actualGenre === 'sci-fi') {
        genreData = genreFilteredData.filter(movie =>
            movie.genres.some(genre => genre.toLowerCase() === 'sci-fi')
        );
    } else if (actualGenre === 'comedy') {
        genreData = genreFilteredData.filter(movie =>
            movie.genres.some(genre => genre.toLowerCase() === 'comedy')
        );
    } else if (actualGenre === 'horror') {
        genreData = genreFilteredData.filter(movie =>
            movie.genres.some(genre => genre.toLowerCase() === 'horror')
        );
    }

    return (
        <div>
            <BreadcrumbsBanner />
            <div className="px-10 md:px-20 py-10 lg:flex items-start gap-10">
                <div className="w-full lg:w-3/4">
                    {
                        isGenreDataLoading ?
                            <div className="w-full h-[100vh] flex items-center justify-center">
                                <LoaderAnimation />
                            </div>
                            :
                            <PaginatedSection data={genreData} />
                    }
                </div>
                <div className="w-full lg:w-1/4">
                    Here sidenav content goes
                </div>
            </div>
        </div>
    );
}

export default GenrePage;