import CarouselDataLoadContext from "../../contexts/CarouselDataLoadContext";
import SciFi from "../Genres/SciFi";
import HeadingBanner from "./HeadingBanner";


function Home() {
    return (
        <CarouselDataLoadContext>
            <HeadingBanner />
            <div className="px-10 md:px-20 py-10 lg:flex items-start gap-10">
                <div className="w-3/4">
                    <SciFi />
                </div>
                <div className="w-1/4">
                    Here goes sidenav things
                </div>
            </div>
        </CarouselDataLoadContext>
    );
}

export default Home;