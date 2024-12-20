import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/movie-sage-logo.png';
import gridImage from '../../assets/movie-grid-bg.jpg';

function HeaderNav() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="bg-[#0f2133] uppercase font-mono relative bg-cover bg-bottom" style={{ backgroundImage: `url(${gridImage})` }}>
            <div className="absolute inset-0 bg-black opacity-85"></div>
            <div className="relative">
                <div className="flex justify-between items-center relative z-10 px-10 md:px-20">
                    <div>
                        <Link to="/"><img src={logoImg} alt="MovieSage" className="w-20 h-20" /></Link>
                    </div>
                    <div onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden">
                        {
                            !toggleMenu && <Bars3Icon className="h-6 w-6" />
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
                            <Link to="/signup" className="btn btn-accent btn-outline">Sign Up</Link>
                        </div>
                    </div>
                </div>
                {/* Display on small screens */}
                <div className={`flex flex-col justify-center items-center gap-4 w-full bg-[#0f2133] absolute top-0 z-30 px-5 pb-5 pt-14 ${toggleMenu ? 'left-0' : 'left-[-100%]'} transition-all duration-1000 ease-in-out md:hidden`} onClick={() => setToggleMenu(!toggleMenu)}>
                    <Link to="/home">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/news">News</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup" className="btn btn-accent btn-outline w-full text-center">Sign Up</Link>
                </div>
                <div className="absolute top-7 right-10 z-40">
                    {
                        toggleMenu && <XMarkIcon className="w-6 h-6" onClick={() => setToggleMenu(!toggleMenu)} />
                    }
                </div>
            </div>
        </nav>
    );
}

export default HeaderNav;