import { useLoaderData } from "react-router-dom";
import SearchMovie from "../SearchMovie/SearchMovie";
import gridImage from "../../assets/movie-grid-bg.jpg";
import { FaShare, FaHeart, FaStar, FaAnglesRight } from "react-icons/fa6";
import SingleMovieTabs from "./SingleMovieTabs";

function SingleMovie() {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="py-32 px-10 md:px-20 bg-contain -translate-y-20 relative" style={{ backgroundImage: `url(${gridImage})` }}>
            <div className="absolute inset-0 bg-black opacity-85"></div>
            <SearchMovie />
            <div className="relative md:flex items-start pt-16">
                <div className="relative group md:sticky top-28 w-full md:w-[30%] overflow-hidden rounded-md">
                    <div className="relative overflow-hidden">
                        <img src={data?.poster} alt="Error Loading Image" className="w-full transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    </div>
                    <button className="absolute bottom-[-50px] left-0 right-0 mx-auto btn btn-accent uppercase font-bold w-fit transition-all duration-300 group-hover:bottom-5">View Full Poster</button>
                </div>
                <div className="w-full md:w-[70%] md:pl-10">
                    <div className="uppercase text-xl md:text-3xl font-bold font-montserrat my-5 md:mt-0">{data?.title} <span className="text-gray-500 text-base md:text-xl">({data?.year})</span>
                        <div className="capitalize text-gray-400 text-base">{data?.type}</div>
                    </div>
                    <div className='flex items-center flex-wrap gap-5 mb-5'>
                        {data?.genres?.map((cat, catIdx) => (
                            <div key={catIdx} className={`${['bg-red-500', 'bg-purple-500', 'bg-amber-500', 'bg-pink-500', 'bg-lime-500', 'bg-green-500', 'bg-fuchsia-500', 'bg-teal-500', 'bg-blue-500', 'bg-cyan-500'][Math.round(Math.random() * 9)]} w-fit px-3 py-1 font-semibold text-xs uppercase text-black rounded-md`}>
                                {cat}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-5 mb-5 font-bold">
                        <div className="flex items-center gap-2 cursor-pointer text-accent"><FaHeart className="w-10 h-10 p-3 border border-accent rounded-full hover:bg-[#0f2133]" /> <span className="uppercase">add to favourite</span></div>
                        <div className="flex items-center gap-2 cursor-pointer text-accent"><FaShare className="w-10 h-10 p-3 border border-accent rounded-full hover:bg-[#0f2133]" /> <span className="uppercase">share</span></div>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-between items-center mb-5">
                        <div className="flex items-center">
                            <FaStar className="w-6 h-6 text-yellow-500 mr-3" />
                            <span className="text-xl">{data?.imdb?.rating}</span>
                            <span>/10 (
                                <span className="text-accent text-sm capitalize">{data?.imdb.votes} votes</span>)
                            </span>
                        </div>
                        <div className="uppercase flex items-center text-accent hover:animate-pulse cursor-pointer">
                            <p>wanna rate this?</p> <FaAnglesRight className="w-5 h-5 ml-3" />
                        </div>
                    </div>
                    <div className="mt-20">
                        <SingleMovieTabs data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleMovie;