import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';

export const Navbar = () => {

    // const handleLogoClick = (e) => {
    //     e.preventDefault();
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    //     setTimeout(() => {
    //         window.location.reload();
    //     }, 500);
    // };

    return (
        <>
            <header className='sticky top-0 z-[1]'>
                <nav className="px-3 flex items-center py-4">
                    {/* <div className="logo">
                        <a href="#" onClick={handleLogoClick}>
                            <img src={logo} alt="logo" className="w-[80px] h-[60px] object-cover" />
                        </a>
                    </div> */}

                    <div className="links text-white">
                        <ul className='flex'>
                            <li className='mx-4 font-semibold'><NavLink to='/' className={({ isActive }) =>
                                isActive ? 'bg-bcolor py-[2.5px] px-[9px] rounded-[5px]' : 'hover:text-gray-300'}>Home</NavLink></li>
                            <li className='mx-4 font-semibold'><NavLink to="/blogs" className={({ isActive }) =>
                                isActive ? 'bg-bcolor py-[2.5px] px-[9px] rounded-[5px]' : 'hover:text-gray-300'
                            }>Blogs</NavLink></li>
                            <li className='mx-4 font-semibold'><NavLink to="/about" className={({ isActive }) =>
                                isActive ? 'bg-bcolor py-[2.5px] px-[9px] rounded-[5px]' : 'hover:text-gray-300'}>About</NavLink></li>
                            {/* <li className='mx-4 font-semibold'><NavLink to="/resume" className={({ isActive }) =>
                                isActive ? 'bg-bcolor py-[2.5px] px-[9px] rounded-[5px]' : 'hover:text-gray-300'
                            }>Resume</NavLink></li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
