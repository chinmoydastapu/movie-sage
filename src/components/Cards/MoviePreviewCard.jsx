import { EyeIcon, StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function MoviePreviewCard({ data }) {
    const [isPreviewCardHovering, setIsPreviewCardHovering] = useState(false);

    return (
        <div className="flex justify-center items-center w-full bg-cover h-[500px] md:h-[400px] lg:h-64 rounded-xl shadow-lg overflow-hidden relative" style={{ backgroundImage: `url(${data?.poster})` }} onMouseEnter={() => setIsPreviewCardHovering(true)} onMouseLeave={() => setIsPreviewCardHovering(false)}>
            <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 transition-all duration-500 ease-linear ${isPreviewCardHovering ? 'via-black/80 to-black/80' : 'via-black/40 to-transparent'}`}
            ></div>
            <div className={`absolute p-5 w-full h-full flex justify-start items-end`}>
                <div className="flex flex-col gap-2 w-full">
                    {isPreviewCardHovering && <EyeIcon className="absolute top-5 right-5 w-6 h-6 text-accent cursor-pointer" />}
                    <div className='text-base font-montserrat font-bold'>{data?.title}</div>
                    <div className='flex items-center gap-2'>
                        <StarIcon className='w-5 h-5 text-yellow-500' />
                        <span><span className='text-base'>{data?.imdb?.rating}</span>/10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviePreviewCard;