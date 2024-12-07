import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {

    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    return (
        <>
            <header className='sticky top-0 z-[1]'>
                <nav className="px-3 flex items-center justify-between">
                    <div className="logo">
                        <a href="#" onClick={handleLogoClick}>
                            <img src={logo} alt="logo" className="w-[80px] h-[60px] object-cover" />
                        </a>
                    </div>

                    <div className="links text-white">
                        <ul className='flex'>
                            <li className='mx-3 font-semibold'><a href="#" target='-blank'></a></li>
                            <li className='mx-3 font-semibold'><a href="#" target='-blank'>About Me</a></li>
                            <li className='mx-3 font-semibold'><Link to="/blogs">Blogs</Link></li>
                            <li className='mx-3 font-semibold'><a href="#" target='-blank'>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
