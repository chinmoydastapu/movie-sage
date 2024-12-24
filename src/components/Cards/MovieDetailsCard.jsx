import { CalendarDaysIcon, ClockIcon, StarIcon } from "@heroicons/react/24/solid";

function MovieDetailsCard({ data }) {
    const { title, year, imdb, plot, runtime, released, directors, cast, writers, genres } = data;
    const shortPlot = plot?.split(" ")?.slice(0, 25)?.join(" ") + "...";
    // convert runtime
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    const formattedTime = `${hours}h ${minutes}m`;
    // release date
    const date = new Date(released);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedReleaseDate = date.toLocaleDateString("en-US", options);

    console.log(data);

    return (
        <div className="md:flex items-center shadow-inner shadow-gray-700">
            <div className="w-full md:w-2/5">
                <img className="w-full" src={data?.poster} alt="Error Loading Image" />
            </div>
            <div className="w-full md:w-3/5 p-5 flex flex-col gap-3">
                <div className='flex items-center flex-wrap gap-2 mb-3'>
                    {genres?.map((cat, catIdx) => (
                        <div key={catIdx} className={`${['bg-red-500', 'bg-purple-500', 'bg-amber-500', 'bg-pink-500', 'bg-lime-500', 'bg-green-500', 'bg-fuchsia-500', 'bg-teal-500', 'bg-blue-500', 'bg-cyan-500'][Math.round(Math.random() * 9)]} w-fit px-3 py-1 font-semibold text-xs uppercase text-black rounded-md`}>
                            {cat}
                        </div>
                    ))}
                </div>
                <h3 className="uppercase text-xl font-bold font-montserrat">{title} <span className="text-gray-500">({year})</span></h3>
                <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-yellow-500" />
                    <span><span className="text-xl font-semibold">{imdb?.rating}</span>/10</span>
                </div>
                <p className="text-gray-400">{shortPlot}</p>
                <div className="bg-gray-700 h-[1px] my-5"></div>
                <div className="flex justify-between items-center capitalize">
                    <div className="flex items-center gap-2"><ClockIcon className="w-5 h-5 text-stone-300" />runtime: {formattedTime}</div>
                    <div className="flex items-center gap-2"><CalendarDaysIcon className="w-5 h-5 text-stone-300" />released: {formattedReleaseDate}</div>
                </div>
                <div className="text-sm">
                    {directors?.length > 0 && <>Directors: {directors?.map((director, idx) => <span key={idx} className="text-accent">{director}, </span>)}</>}
                </div>
                <div className="text-sm">
                    {cast?.length > 0 && <>Cast: {cast?.map((c, idx) => <span key={idx} className="text-accent">{c}, </span>)}</>}
                </div>
                <div className="text-sm">
                    {writers?.length > 0 && <>Writers: {writers?.map((writer, idx) => <span key={idx} className="text-accent">{writer}, </span>)}</>}
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsCard;