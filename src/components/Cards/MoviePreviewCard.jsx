import { FaEye, FaStar } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function MoviePreviewCard({ data }) {
    const [isPreviewCardHovering, setIsPreviewCardHovering] = useState(false);

    return (
        <div className="flex justify-center items-center w-full bg-cover h-[500px] md:h-[400px] lg:h-64 rounded-xl shadow-lg overflow-hidden relative" style={{ backgroundImage: `url(${data?.poster})` }} onMouseEnter={() => setIsPreviewCardHovering(true)} onMouseLeave={() => setIsPreviewCardHovering(false)}>
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ease-linear`}></div>
            <div
                className={`absolute inset-0 transition-all duration-200 ease-linear ${isPreviewCardHovering ? 'bg-black opacity-70' : 'opacity-0'}`}
            ></div>
            {isPreviewCardHovering && <Link to={`/home/movies/${data._id}`}><FaEye className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-6 h-6 text-accent cursor-pointer transition-opacity duration-200 ease-linear ${isPreviewCardHovering ? 'opacity-100 z-10' : 'opacity-0'}`} /></Link>}
            <div className="absolute p-5 w-full h-full flex justify-start items-end transition-opacity duration-200 ease-linear">
                <div className="flex flex-col gap-2 w-full">
                    <div className='text-base font-montserrat font-bold'>{data?.title}</div>
                    <div className='flex items-center gap-2'>
                        <FaStar className='w-5 h-5 text-yellow-500' />
                        <span><span className='text-base'>{data?.imdb?.rating}</span>/10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePreviewCard;