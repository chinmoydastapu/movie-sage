import { useEffect, useState } from "react";
import { carouselDataLoadingContext } from "./contextsPrototypes";
import { readCarouselData } from "../API/movieReviewsAPI";

function CarouselDataLoadContext({ children }) {
    const [isCarouselDataLoading, setIsCarouselDataLoading] = useState(true);
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        const getCarouselData = async () => {
            try {
                const data = await readCarouselData();
                
                if (data) setCarouselData(data);
            } catch (error) {
                console.log("Error loading Carousel data: ", error);
            } finally {
                setIsCarouselDataLoading(false);
            }
        }
        getCarouselData();
    }, []);

    return (
        <carouselDataLoadingContext.Provider value={{ isCarouselDataLoading, carouselData }}>
            {children}
        </carouselDataLoadingContext.Provider>
    );
}

export default CarouselDataLoadContext;