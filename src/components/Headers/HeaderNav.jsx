import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/movie-sage-logo.png';

function HeaderNav() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="bg-[#0f2133] uppercase font-mono sticky top-0">
            <div className="relative">
                <div className="flex justify-between items-center relative z-10 px-10">
                    <div>
                        <Link to="/"><img src={logoImg} alt="MovieSage" className="w-16 h-16" /></Link>
                    </div>
                    <div onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden">
                        {
                            toggleMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />
                        }
                    </div>
                    {/* Display on large screens */}
                    <div className="hidden md:flex justify-end items-center gap-8 bg-transparent">
                        <Link to="/home">Home</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/news">News</Link>
                        <Link to="/about">About</Link>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup" className="btn btn-accent">Sign Up</Link>
                    </div>
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