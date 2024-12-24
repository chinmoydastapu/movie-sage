import { useContext } from "react";
import { genreDataLoadingContext } from "../../contexts/contextsPrototypes";
import LoaderAnimation from "../LottieAnimations/LoaderAnimation";
import gridImage from "../../assets/movie-grid-bg.jpg";
import SearchMovie from "../SearchMovie/SearchMovie";
import { Link } from "react-router-dom";
import PaginatedSection from "../PaginatedSection/PaginatedSection";

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
            <div className="h-[50vh] px-10 md:px-20 py-10 bg-cover relative" style={{ backgroundImage: `url(${gridImage})` }}>
                <div className="absolute inset-0 bg-black opacity-85"></div>
                <SearchMovie />
                <div className="absolute bottom-10 left-[50%] -translate-x-[50%] uppercase">
                    <h1 className="text-xl md:text-3xl font-bold font-montserrat">{actualGenre} movies</h1>
                    <div className="breadcrumbs text-sm">
                        <ul className="justify-center">
                            <li><Link to='/home'>{genrePath[1]}</Link></li>
                            <li>{genrePath[2]}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-10 md:px-20 py-10 lg:flex items-start gap-10">
                <div className="w-full lg:w-3/4">
                    {
                        isGenreDataLoading ?
                            <div className="w-full h-[100vh] flex items-center justify-center">
                                <LoaderAnimation />
                            </div>
                            :
                            <PaginatedSection genreData={genreData} />
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