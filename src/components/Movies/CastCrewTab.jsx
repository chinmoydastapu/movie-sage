import CastProfileCard from "../Cards/CastProfileCard";

function CastCrewTab({ data }) {
    const { title, cast, directors, writers } = data;

    return (
        <div className="text-gray-400 flex flex-col gap-5">
            <div className="mb-5">
                <p className="capitalize text-sm md:text-base font-bold">cast & crew of</p>
                <h1 className="capitalize text-lg md:text-2xl font-bold text-accent">{title}</h1>
            </div>
            <div>
                <h2 className="uppercase text-sm md:text-base font-bold">directors & producers</h2>
                <div className="bg-gray-700 h-[1px]"></div>
                <div className="flex flex-col gap-5 my-5">
                    {directors.length > 0 && directors.map((c, idx) => <CastProfileCard key={idx} profileData={c} />)}
                </div>
            </div>
            <div>
                <h2 className="uppercase text-sm md:text-base font-bold">writers</h2>
                <div className="bg-gray-700 h-[1px]"></div>
                <div className="flex flex-col gap-5 my-5">
                    {writers.length > 0 && writers.map((c, idx) => <CastProfileCard key={idx} profileData={c} />)}
                </div>
            </div>
            <div>
                <h2 className="uppercase text-sm md:text-base font-bold">cast</h2>
                <div className="bg-gray-700 h-[1px]"></div>
                <div className="flex flex-col gap-5 my-5">
                    {cast.length > 0 && cast.map((c, idx) => <CastProfileCard key={idx} profileData={c} />)}
                </div>
            </div>
        </div>
    );
}

export default CastCrewTab;