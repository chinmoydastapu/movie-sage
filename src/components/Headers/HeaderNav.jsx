import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/movie-sage-logo.png';

function HeaderNav() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navItems = [
        { path: '/home', name: 'Home' },
        { path: '/movies', name: 'Movies' },
        { path: '/news', name: 'News' },
        { path: '/about', name: 'About' }
    ];

    return (
        <nav className="bg-[#0f2133] py-5 px-8 relative">
            <div className="flex justify-between items-center relative z-20">
                <div>
                    <img src={logoImg} alt="MovieSage" className="w-10 h-10" />
                </div>
                <div onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden">
                    {
                        toggleMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />
                    }
                </div>
                <div className="hidden md:flex justify-end items-center gap-4 bg-transparent">
                    {
                        navItems.map((item, idx) => <Link key={idx} to={item.path}>{item.name}</Link>)
                    }
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center gap-4 w-full bg-[#0f2133] absolute top-20 pb-5 ${toggleMenu ? 'left-0' : 'left-[-100%]'} transition-all duration-1000 ease-in-out md:hidden`} onClick={() => setToggleMenu(!toggleMenu)}>
                {
                    navItems.map((item, idx) => <Link key={idx} to={item.path}>{item.name}</Link>)
                }
            </div>
        </nav>
    );
}

export default HeaderNav;