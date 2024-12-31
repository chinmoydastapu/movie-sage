import { FaAngleDoubleRight } from "react-icons/fa";
import CastProfileCard from "../Cards/CastProfileCard";
import { useContext } from "react";
import { DataLoadingContext } from "../../contexts/contextsPrototypes";
import LoaderAnimation from "../LottieAnimations/LoaderAnimation";
import MoviePreviewCard from "../Cards/MoviePreviewCard";

function OverviewTab({ data, setActiveTab }) {
    const { cast, directors, writers, countries, languages, released, runtime } = data;

    // release date
    const date = new Date(released);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedReleaseDate = date.toLocaleDateString("en-US", options);

    // convert runtime
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    const formattedTime = `${hours}h ${minutes}m`;

    // find out related movies
    const { isAllDataLoading, moviesData } = useContext(DataLoadingContext);
    const currentGenres = data?.genres || [];
    const relatedMovies = moviesData
        .filter(movie => movie._id !== data._id && movie?.genres?.some(genre => currentGenres.includes(genre)))
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    return (
        <div className="md:flex items-start gap-10 text-sm text-gray-400">
            <div className="w-full md:w-2/3 flex flex-col gap-5">
                <div className="text-justify mb-5">{data?.plot}
                    <span className="text-accent text-xs cursor-pointer ml-2 capitalize hover:animate-pulse"
                        onClick={() => setActiveTab(1)}>see description</span>
                </div>
                <div>
                    <div className="flex items-baseline gap-3 mb-5">
                        <h1 className="uppercase text-sm md:text-base font-semibold">cast & crew</h1>
                        <div className="flex-grow bg-gray-700 h-[1px]"></div>
                        <div className="flex items-center gap-1 uppercase cursor-pointer text-accent text-xs hover:animate-pulse" onClick={() => setActiveTab(2)}>
                            <span className="hidden md:block">full cast & crew</span>
                            <FaAngleDoubleRight className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-5">
                        {cast.length > 0 && cast.map((c, idx) => <CastProfileCard key={idx} profileData={c} />)}
                    </div>
                </div>
                <div className="flex items-baseline gap-3 mb-5">
                    <h1 className="uppercase text-sm md:text-base font-semibold">reviews</h1>
                    <div className="flex-grow bg-gray-700 h-[1px]"></div>
                    <div className="flex items-center gap-1 uppercase cursor-pointer text-accent text-xs hover:animate-pulse" onClick={() => setActiveTab(3)}>
                        <span className="hidden md:block">all reviews</span>
                        <FaAngleDoubleRight className="w-5 h-5" />
                    </div>
                </div>
                <div>
                    <div className="flex items-baseline gap-3 mb-5">
                        <h1 className="uppercase text-sm md:text-base font-semibold">related movies</h1>
                        <div className="flex-grow bg-gray-700 h-[1px]"></div>
                        <div className="flex items-center gap-1 uppercase cursor-pointer text-accent text-xs hover:animate-pulse" onClick={() => setActiveTab(4)}>
                            <span className="hidden md:block">more related movies</span>
                            <FaAngleDoubleRight className="w-5 h-5" />
                        </div>
                    </div>
                    {
                        isAllDataLoading ?
                            <div className="w-full h-[100vh] flex items-center justify-center">
                                <LoaderAnimation />
                            </div>
                            :
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                                {relatedMovies.map((relatedMovie, idx) => <MoviePreviewCard key={idx} data={relatedMovie} />)}
                            </div>
                    }
                </div>
            </div>
            {/* sidenav */}
            <div className="w-full md:w-1/3 flex flex-col gap-5">
                <div>
                    {directors?.length > 0 && <>Directors: <div>{directors?.map((director, idx) => <span key={idx} className="text-accent">{director}{idx < directors.length - 1 && ", "}</span>)}</div></>}
                </div>
                <div>
                    {writers?.length > 0 && <>Writers: <div>{writers?.map((writer, idx) => <span key={idx} className="text-accent">{writer}{idx < writers.length - 1 && ", "}</span>)}</div></>}
                </div>
                <div>
                    {countries?.length > 0 && <>Released Countries: <div>{countries?.map((country, idx) => <span key={idx} className="text-accent">{country}{idx < countries.length - 1 && ", "}</span>)}</div></>}
                </div>
                <div>
                    {languages?.length > 0 && <>Languages: <div>{languages?.map((language, idx) => <span key={idx} className="text-accent">{language}{idx < languages.length - 1 && ", "}</span>)}</div></>}
                </div>
                <div>
                    <p>Released Date:</p>
                    <span>{formattedReleaseDate}</span>
                </div>
                <div>
                    <p>Runtime:</p>
                    <span>{formattedTime}</span>
                </div>
            </div>
        </div>
    );
}

export default OverviewTab;