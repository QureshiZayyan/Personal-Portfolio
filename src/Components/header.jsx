import Typed from 'typed.js';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';

export const Header = (props) => {
    useEffect(() => {
        const options = {
            strings: ['Technology Enthusiast', 'Programmer', 'Software Developer'],
            typeSpeed: 30,
            backSpeed: 14,
            backDelay: 2000,
        };

        const typed = new Typed('#element', options);

        return () => {
            typed.destroy();
        };
    }, []);

    const ReloadPage = () => {
        window.location.reload();
    }

    return (
        <>
            <header className="sticky top-0 z-[1]">
                <nav className="shadow-md px-1">
                    <div className="heading">
                        <a href="#" onClick={() => ReloadPage()}>
                            <img src={logo} alt="logo" className="w-[80px] h-[60px] object-cover" />
                        </a>
                    </div>
                </nav>
            </header>

            <div className="intro flex items-center mt-[50px] mx-16">
                <div className="left lg:w-[60%] lg:h-auto xl:w-[49%] xl:h-auto md:w-[304px] md:h-[200px]">
                    <h1 className="text-[31.9px] font-bold text-white leading-[39px]">Hey, My Self <span className="name">Zayyan Qureshi</span>
                        <br />
                        <span>& I&apos;m a Passionate</span>
                        <br />
                        <span id="element">software developer</span>
                    </h1>
                </div>

                <div className="right w-[50%]">
                    <img src={props.imageurl} alt="codeimg" className="img xl:w-[63%] lg:w-[63%] md:w-[70%] ml-32" />
                </div>
            </div>

            <div className="resume-github mx-[65px] relative lg:-top-8 md:top-3 xl:-top-16">
                <a href="src/assets/Resume.pdf" target="_blank" className="text" download><button className="btn text-[13px] px-[6.3px] py-[4px] font-[765] shadow-bs hover:outline-none hover:opacity-[0.8] hover:transform hover:translate-y-[-2px] duration-300 cursor-pointer rounded-[5px] bg-white">Download Resume</button></a>
                <a href="https://github.com/QureshiZayyan" target='_blank' className="text"><button id="btn" className="btn text-[13px] px-[6.3px] py-[4px] font-[765] shadow-bs hover:outline-none hover:opacity-[0.7] hover:transform hover:translate-y-[-2px] duration-300 cursor-pointer rounded-[5px] bg-white ml-[8px]">Visit Github</button></a>
            </div>
        </>
    )
}

Header.propTypes = {
    imageurl: PropTypes.string.isRequired,
}
