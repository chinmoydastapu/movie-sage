import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useRef } from "react";

function SearchMovie() {
    const inputRef = useRef(null);

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

    return (
        <div className="pl-4 md:w-1/2 mx-auto flex items-center bg-[#0f2133] rounded-3xl mb-10 py-3 sm:py-0 relative">
            <HiMagnifyingGlass className="w-6 h-6 mr-5 text-accent" />
            <input type="text" ref={inputRef} className="flex-grow h-full appearance-none border-none bg-transparent outline-none focus:ring-0" placeholder="Search for a movie or tv show" />
            <button className="btn btn-accent btn-outline uppercase hidden sm:block">Find Out</button>  
        </div>
    );
}

export default SearchMovie;