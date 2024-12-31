import { useContext } from "react";
import BreadcrumbsBanner from "../Headers/BreadcrumbsBanner";
import { DataLoadingContext } from "../../contexts/contextsPrototypes";
import LoaderAnimation from "../LottieAnimations/LoaderAnimation";
import PaginatedSection from "../PaginatedSection/PaginatedSection";

function Movies() {
    const { isAllDataLoading, moviesData } = useContext(DataLoadingContext);

    return (
        <div>
            <BreadcrumbsBanner />
            <div className="px-10 md:px-20 lg:flex items-start gap-10">
                <div className="w-full lg:w-1/4">
                    Here sidenav content goes
                </div>
                <div className="w-full lg:w-3/4">
                    {
                        isAllDataLoading ?
                            <div className="w-full h-[100vh] flex items-center justify-center">
                                <LoaderAnimation />
                            </div>
                            :
                            <PaginatedSection data={moviesData} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Movies;