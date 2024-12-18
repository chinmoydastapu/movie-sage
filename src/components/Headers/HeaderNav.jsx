import { useState, useEffect, useRef } from "react";
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/movie-sage-logo.png';

function HeaderNav() {
    const [toggleMenu, setToggleMenu] = useState(false);
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
          if (!isDeleting && charIndex-1 === currentText.length) {
            isDeleting = true;
            typingTimeout = setTimeout(typeAnimation, 1500); // Pause before deleting
          } else if (isDeleting && charIndex+1 === 0) {
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
        <nav className="bg-[#0f2133] uppercase font-mono pb-3">
            <div className="relative">
                <div className="flex justify-between items-center relative z-10 px-10 md:px-20">
                    <div>
                        <Link to="/"><img src={logoImg} alt="MovieSage" className="w-20 h-20" /></Link>
                    </div>
                    <div onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden">
                        {
                            toggleMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />
                        }
                    </div>
                    {/* Display on large screens */}
                    <div className="hidden md:flex justify-between items-center flex-grow ml-20 bg-transparent">
                        <div className="flex justify-start items-center gap-8">
                            <Link to="/home">Home</Link>
                            <Link to="/movies">Movies</Link>
                            <Link to="/news">News</Link>
                            <Link to="/about">About</Link>
                        </div>
                        <div className="flex justify-end items-center gap-5">
                            <Link to="/login">Log In</Link>
                            <Link to="/signup" className="btn btn-accent">Sign Up</Link>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 md:w-3/4 mx-auto pl-4 flex items-center bg-black rounded-3xl">
                    <MagnifyingGlassIcon className="w-6 h-6 mr-5" />
                    <input type="text" ref={inputRef} className="flex-grow h-full bg-black appearance-none border-none bg-transparent outline-none focus:ring-0" placeholder="Search for a movie or tv show" />
                    <button className="btn btn-accent uppercase">Search</button>
                </div>
                {/* Display on small screens */}
                <div className={`flex flex-col justify-center items-center gap-4 w-full bg-[#0f2133] absolute top-16 px-5 pb-5 ${toggleMenu ? 'left-0' : 'left-[-100%]'} transition-all duration-1000 ease-in-out md:hidden`} onClick={() => setToggleMenu(!toggleMenu)}>
                    <Link to="/home">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/news">News</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup" className="btn btn-accent w-full text-center">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
}

export default HeaderNav;