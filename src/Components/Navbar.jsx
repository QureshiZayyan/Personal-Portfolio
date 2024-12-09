import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {

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
                <nav className="px-3 flex items-center justify-center py-4">
                    {/* <div className="logo">
                        <a href="#" onClick={handleLogoClick}>
                            <img src={logo} alt="logo" className="w-[80px] h-[60px] object-cover" />
                        </a>
                    </div> */}

                    <div id="mobile-menu">
                        <label className="hamburger">
                            <input type="checkbox" />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>

                    <div className="links text-white">
                        <ul className='flex'>
                            <li className='mx-4 font-semibold'><NavLink to='/' className={({ isActive }) =>
                                isActive ? 'bg-bcolor py-[2.5px] px-[9px] rounded-[5px]' : 'hover:text-gray-300'}>Home</NavLink></li>
                            <li className='mx-4 font-semibold'><a href="#" target='-blank'>About Me</a></li>
                            <li className='mx-4 font-semibold'><NavLink to="/blogs" className={({ isActive }) =>
                                isActive ? 'bg-bcolor py-[2.5px] px-[9px] rounded-[5px]' : 'hover:text-gray-300'
                            }>Blogs</NavLink></li>
                            <li className='mx-4 font-semibold'><a href="#" target='-blank'>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
