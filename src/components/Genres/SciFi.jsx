import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { scifiMoviesLoadingContext } from "../../contexts/contextsPrototypes";
import LoaderAnimation from "../LottieAnimations/LoaderAnimation";
import MoviePreviewCard from "../Cards/MoviePreviewCard";

function SciFi() {
    const [arrowHoverEffect, setArrowHoverEffect] = useState(false);
    const { isScifiLoading, scifiMovies } = useContext(scifiMoviesLoadingContext);


    return (
        <div>
            <div className="flex items-baseline gap-3">
                <h1 className="uppercase text-2xl font-semibold font-montserrat">Sci-fi Movies</h1>
                <div className="flex-grow bg-gray-700 h-[1px]"></div>
                <div className="flex items-center gap-1 uppercase cursor-pointer hover:text-accent transition-all duration-200 ease-in" onMouseEnter={() => setArrowHoverEffect(true)} onMouseLeave={() => setArrowHoverEffect(false)}>
                    <span>see all</span>
                    <ChevronDoubleRightIcon className={`w-5 h-5 ${arrowHoverEffect ? 'translate-x-3' : '-translate-x-0'} transition-all duration-200 ease-in`} />
                </div>
            </div>
            {
                isScifiLoading ?
                    <div className="w-full h-[100vh] flex items-center justify-center">
                        <LoaderAnimation />
                    </div>
                    :
                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {
                            scifiMovies.sort(() => Math.random() - 0.5).slice(0, 4).map((scifiMovie, idx) => <MoviePreviewCard key={idx} data={scifiMovie} />)
                        }
                    </div>
            }
        </div>
    );
}

export default SciFi;