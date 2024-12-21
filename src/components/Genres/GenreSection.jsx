import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import LoaderAnimation from "../LottieAnimations/LoaderAnimation";
import MoviePreviewCard from "../Cards/MoviePreviewCard";

function GenreSection({ genreData, genreType }) {
    const { isGenreDataLoading, genreFilteredData } = genreData;

    let specificGenre;
    if (genreType === 'sci-fi') {
        specificGenre = genreFilteredData.filter(movie =>
            movie.genres.some(genre => genre.toLowerCase() === 'sci-fi')
        );
    } else if (genreType === 'comedy') {
        specificGenre = genreFilteredData.filter(movie =>
            movie.genres.some(genre => genre.toLowerCase() === 'comedy')
        );
    } else if (genreType === 'horror') {
        specificGenre = genreFilteredData.filter(movie =>
            movie.genres.some(genre => genre.toLowerCase() === 'horror')
        );
    }

    return (
        <div>
            <div className="flex items-baseline gap-3">
                <h1 className="uppercase text-2xl font-semibold font-montserrat">{genreType} Movies</h1>
                <div className="flex-grow bg-gray-700 h-[1px]"></div>
                <div className="flex items-center gap-1 uppercase cursor-pointer hover:text-accent hover:animate-pulse transition-all duration-200 ease-in">
                    <span>see all</span>
                    <ChevronDoubleRightIcon className="w-5 h-5" />
                </div>
            </div>
            {
                isGenreDataLoading ?
                    <div className="w-full h-[100vh] flex items-center justify-center">
                        <LoaderAnimation />
                    </div>
                    :
                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            specificGenre.sort(() => Math.random() - 0.5).slice(0, 4).map((singleGenreData, idx) => <MoviePreviewCard key={idx} data={singleGenreData} />)
                        }
                    </div>
            }
        </div>
    );
}

export default GenreSection;