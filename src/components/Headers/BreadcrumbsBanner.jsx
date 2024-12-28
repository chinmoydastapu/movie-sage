import SearchMovie from "../SearchMovie/SearchMovie";
import gridImage from "../../assets/movie-grid-bg.jpg";

function BreadcrumbsBanner() {
    const genrePath = window.location.pathname.split('/').slice(1);
    const actualGenre = genrePath[genrePath.length - 1];

    return (
        <div className="h-[50vh] px-10 md:px-20 py-10 bg-cover relative" style={{ backgroundImage: `url(${gridImage})` }}>
            <div className="absolute inset-0 bg-black opacity-85"></div>
            <SearchMovie />
            <div className="absolute bottom-10 left-[50%] -translate-x-[50%] uppercase">
                <h1 className="text-xl md:text-3xl font-bold font-montserrat">{actualGenre}</h1>
                <div className="breadcrumbs text-sm">
                    <ul className="justify-center">
                        {genrePath.map((path, idx) => <li key={idx}>{path}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BreadcrumbsBanner;