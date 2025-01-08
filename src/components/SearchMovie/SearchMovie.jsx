import { HiMagnifyingGlass } from "react-icons/hi2";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataLoadingContext } from "../../contexts/contextsPrototypes";

function SearchMovie() {
    const inputRef = useRef(null);
    const { isAllDataLoading, moviesData } = useContext(DataLoadingContext);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const placeholderTexts = [
            "Search for a movie",
            "Find your favorite TV show",
            "Discover trending titles",
        ];
        let currentIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingTimeout;

        const typeAnimation = () => {
            if (!inputRef.current) return;

            const currentText = placeholderTexts[currentIndex];
            const displayedText = isDeleting
                ? currentText.substring(0, charIndex--)
                : currentText.substring(0, charIndex++);

            inputRef.current.setAttribute("placeholder", displayedText);

            // Handle typing and deleting logic
            if (!isDeleting && charIndex - 1 === currentText.length) {
                isDeleting = true;
                typingTimeout = setTimeout(typeAnimation, 1500); // Pause before deleting
            } else if (isDeleting && charIndex + 1 === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % placeholderTexts.length; // Move to next text
                typingTimeout = setTimeout(typeAnimation, 500); // Short pause before typing again
            } else {
                typingTimeout = setTimeout(typeAnimation, isDeleting ? 50 : 100); // Typing/deleting speed
            }
        };

        typeAnimation();

        // Cleanup on unmount to prevent memory leaks
        return () => clearTimeout(typingTimeout);
    }, []);

    // Filter movies based on search field text
    const handleSuggestions = () => {
        if (!isAllDataLoading) {
            if (query.trim()) {
                const delayDebounceFn = setTimeout(() => {
                    // Filter movies locally based on the query
                    const filteredMovies = moviesData.filter(movie =>
                        movie.title.toLowerCase().startsWith(query.toLowerCase())
                    );
                    setSuggestions(filteredMovies);
                }, 300); // Debounce time in ms

                return () => clearTimeout(delayDebounceFn);
            } else {
                setSuggestions([]);
            }
        }
    };

    const handleSelect = (movieId) => {
        navigate(`/home/movies/${movieId}`);
    };

    return (
        <div className="flex flex-col items-center relative z-50">
            <div className="pl-4 w-full md:w-1/2 mx-auto mb-10 py-3 flex items-center bg-[#0f2133] rounded-3xl">
                <HiMagnifyingGlass className="w-6 h-6 mr-5 text-accent" />
                <input type="text" ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyUp={handleSuggestions} className="flex-grow h-full appearance-none border-none bg-transparent outline-none focus:ring-0" placeholder="Search for a movie or tv show" />
            </div>
            {suggestions.length > 0 || query.length === 0 ? (
                <ul className="bg-[#0f2133] rounded-md overflow-hidden max-h-60 md:w-1/3 mx-auto overflow-y-auto">
                    {suggestions.map(movie => (
                        <li
                            key={movie._id}
                            onClick={() => handleSelect(movie._id)}
                            className="cursor-pointer px-4 py-2 hover:text-accent hover:translate-x-3 hover:font-bold hover:animate-pulse transition duration-300 ease-linear"
                        >
                            {movie.title}
                        </li>
                    ))}
                </ul>
            ) : <div className="capitalize text-xl text-error font-semibold">no movies/series found named {`"${query}"`}</div>}
        </div>
    );
}

export default SearchMovie;