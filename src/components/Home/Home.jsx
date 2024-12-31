import { useContext } from "react";
import CarouselDataLoadContext from "../../contexts/CarouselDataLoadContext";
import HeadingBanner from "./HeadingBanner";
import { genreDataLoadingContext } from "../../contexts/contextsPrototypes";
import GenreSection from "../Genres/GenreSection";

function Home() {
    const { isGenreDataLoading, getMoviesByGenre, genreFilteredData } = useContext(genreDataLoadingContext);
    const genreData = {isGenreDataLoading, genreFilteredData};

    isGenreDataLoading && getMoviesByGenre(['sci-fi', 'comedy', 'horror']);

    return (
        <CarouselDataLoadContext>
            <HeadingBanner />
            <div className="px-10 md:px-20 lg:flex items-start gap-10">
                <div className="w-full lg:w-3/4">
                    <GenreSection genreData={genreData} genreType={'sci-fi'} />
                    <GenreSection genreData={genreData} genreType={'comedy'} />
                    <GenreSection genreData={genreData} genreType={'horror'} />
                </div>
                <div className="w-full lg:w-1/4">
                    Here goes sidenav things
                </div>
            </div>
        </CarouselDataLoadContext>
    );
}

export default Home;