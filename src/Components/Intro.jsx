import { useEffect } from 'react';
import dev from '../assets/developer2.png';
import Typed from 'typed.js';

export const Intro = () => {
  useEffect(() => {
    const options = {
      strings: ['Technology Enthusiast', 'Programmer', 'Software Developer'],
      typeSpeed: 30,
      backSpeed: 14,
      backDelay: 2000,
    };

    const typed = new Typed('#profession', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="intro flex items-center mt-[50px] mx-16">
        <div className="left lg:w-[60%] lg:h-auto xl:w-[49%] xl:h-auto md:w-[304px] md:h-[200px]">
          <h1 className="text-[29.8px] font-bold text-white leading-[39px] xl:text-[33px]">Hey, My Self <span className="name">Zayyan Qureshi</span>
            <br />
            <span>& I&apos;m a Passionate</span>
            <br />
            <span id="profession">Software Developer</span>
          </h1>
        </div>

        <div className="right w-[50%]">
          <img src={dev} alt="codeimg" className="img xl:w-[56%] lg:w-[63%] md:w-[70%] ml-32" />
        </div>
      </div>

      <div className="resume-github mx-[65px] relative lg:-top-8 md:top-3 xl:-top-16">
        <a href="src/assets/Zayyan Resume.pdf" target="_blank" className="text" download><button className="btn lg:text-[13.4px] text-[13px] px-[6px] py-[4px] font-[650] cursor-pointer rounded-[5px] bg-white border-2 border-bdrclr">Download Resume</button></a>
        <a href="https://github.com/QureshiZayyan" target='_blank' className="text"><button id="btn" className="btn lg:text-[13.4px] text-[13px] px-[6px] py-[4px] font-[650] cursor-pointer border-2 text-white rounded-[5px] ml-[13px]">Visit Github</button></a>
      </div>
    </>
  )
}
