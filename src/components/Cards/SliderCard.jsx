import { StarIcon } from "@heroicons/react/24/solid";

function SliderCard({ data }) {
    return (
        <div className="flex justify-center items-center w-full bg-cover h-[500px] lg:h-96 rounded-xl shadow-lg relative" style={{ backgroundImage: `url(${data?.poster})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className='absolute p-5 w-full h-full flex justify-start items-end'>
                <div className="flex flex-col gap-2">
                    <div className='flex items-center flex-wrap gap-2'>
                        {data?.genres?.map((cat, catIdx) => (
                            <div key={catIdx} className={`${['bg-red-500', 'bg-purple-500', 'bg-amber-500', 'bg-pink-500', 'bg-lime-500', 'bg-green-500', 'bg-fuchsia-500', 'bg-teal-500', 'bg-blue-500', 'bg-cyan-500'][Math.round(Math.random() * 9)]} w-fit px-3 py-1 font-semibold text-xs uppercase text-black rounded-md`}>
                                {cat}
                            </div>
                        ))}
                    </div>
                    <div className='text-xl font-montserrat font-bold'>{data?.title}</div>
                    <div className='flex items-center gap-2'>
                        <StarIcon className='w-6 h-6 text-yellow-500' />
                        <span><span className='text-xl'>{data?.imdb?.rating}</span>/10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderCard;