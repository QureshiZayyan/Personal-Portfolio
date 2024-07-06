import Typed from 'typed.js';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Header = (props) => {
    useEffect(() => {
        const options = {
            strings: ['Technology Enthusiast', 'Programmer', 'Software Developer'],
            typeSpeed: 30,
            backSpeed: 20,
        };

        const typed = new Typed('#element', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <header>
                <div className="intro flex justify-between items-center mt-[60px] mr-[80px] mb-0 ml-[60px] overflow-hidden">
                    <div className="left w-[48.8%] h-[22vh]">
                        <h1 className="text-[31.9px] font-bold text-white leading-[39px]">Hey, My Self <span className="name text-purpleclr">Zayyan Qureshi</span> & I'm a Passionate
                            <br />
                            <span id="element" className="text-purpleclr"></span>
                        </h1>
                    </div>

                    <div className="right w-[50%] mr-[-180px]">
                        <img src={props.imageurl} alt="" className="img w-[63%]" />
                    </div>
                </div>

                <div className="resume-github my-0 mx-[60px] relative top-[-40px]">
                    <a href="src/assets/Resume.pdf" target="_blank" className="text" download><button className="text-[13px] px-[6.3px] py-[4px] font-[765] shadow-bs hover:outline-none hover:opacity-[0.8] hover:transform hover:translate-y-[-2px] duration-300 cursor-pointer rounded-[5px] border-transparent bg-white">Download Resume</button></a>
                    <a href="https://github.com/QureshiZayyan" target='_blank' className="text"><button className="text-[13px] px-[6.3px] py-[4px] font-[765] shadow-bs hover:outline-none hover:opacity-[0.7] hover:transform hover:translate-y-[-2px] duration-300 cursor-pointer rounded-[5px] border-transparent bg-white ml-[6.8px]">Visit Github</button></a>
                </div>
            </header>
        </>
    )
}

Header.propTypes = {
    imageurl: PropTypes.string.isRequired,
}
