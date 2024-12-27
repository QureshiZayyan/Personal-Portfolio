import coding from '../assets/coding.png';
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

export const AboutMe = () => {

    return (
        <>
            <section id='about' className="shadow-bs leading-6 text-white flex items-center xl:px-[170px] lg:flex-row-reverse lg:justify-center md:justify-center md:flex-col text-base pt-[32px] lg:pr-[150px] lg:pb-[23px] lg:pl-[150px] my-[60px] md:pl-[10px] md:pr-[40px] md:pb-[17px]">
                <div className="aboutMe lg:w-[33vw] md:w-[85vw]">
                    <h3 className="font-bold mb-[10px] text-[21px] about-me-heading">What I know</h3>
                    <hr />
                    <p className="my-[17px] font-semibold lg:text-base xl:text-lg">I am extremely proficient in Front-End Development using
                        <div className='flex items-center'>
                            <AiFillHtml5 className='icons mx-1' color='#F16524' size={55} />
                            <BiLogoCss3 className='icons mx-1' color='#264DE4' size={55} />
                            <IoLogoJavascript className='icons mx-1' color='#FCD80C' size={55} />
                            <FaBootstrap className='icons mx-1' color='#6F2CF6' size={55} />
                            <RiTailwindCssFill className='icons mx-1' color='#0EA5E9' size={55} />
                            <FaReact className='icons mx-1' color='#00FFFF' size={55} />
                            <SiRedux className='icons mx-1' color='#7B5EA7' size={55} />
                        </div>
                    </p>
                    <hr />
                    <div className="grad flex items-center">
                        {/* <img src={cap} alt="cap" className='inline-block w-11 mr-2' /> */}
                        {/* <p className="my-[17px] font-semibold lg:text-base xl:text-lg">Graduated with a degree in <span className='font-bold'>(Bachelor of Science in Information Technology)</span></p> */}
                    </div>
                </div>

                <div>
                    {/* <img src={coding} alt="" id='code-img' /> */}
                </div>
            </section>
        </>
    )
}