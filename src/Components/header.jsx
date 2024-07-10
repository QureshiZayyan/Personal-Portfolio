// import Typed from 'typed.js';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Header = (props) => {
    //     useEffect(() => {
    //         const options = {
    //             strings: ['Technology Enthusiast', 'Programmer', 'Software Developer'],
    //             typeSpeed: 30,
    //             backSpeed: 20,
    //             backDelay: 1200,
    //         };

    //         const typed = new Typed('#element', options);

    //         return () => {
    //             typed.destroy();
    //         };
    //     }, []);

    return (
        <>
            <header>
                <div className=" bg-red-500intro flex items-center mt-[50px] mr-[80px] ml-[60px] overflow-hidden">
                    <div className="left w-[49%] md:w-[50vw]">
                        <h1 className="text-[31.9px] font-bold text-white leading-[39px]">Hey, My Self <span className="name text-purpleclr">Zayyan Qureshi</span>
                            <br />
                            <span>& I&apos;m a Passionate</span>
                            <br />
                            <span id="element" className="text-purpleclr">software developer</span>
                        </h1>
                    </div>

                    <div className="right w-[50%] lg:mr-[-180px] md:mr-[-50%] md:ml-[10%]">
                        <img src={props.imageurl} alt="" className="img w-[63%]" />
                    </div>
                </div>

                <div className="resume-github mx-[60px] relative md:top-[13%] lg:top-[-13%]">
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