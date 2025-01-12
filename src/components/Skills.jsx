import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";

export const Skills = () => {

    return (
        <>
            <section id='about' className="shadow-bs leading-6 text-white flex items-center justify-between xl:px-[170px] lg:justify-between md:justify-center md:flex-col text-base pt-[32px] lg:pr-[150px] lg:pb-[23px] lg:pl-[150px] my-[60px] md:pl-[10px] md:pr-[40px] md:pb-[17px]">
                <div className="solar-system">
                    <div className="orbit">
                        <FaBootstrap className="icon" color="#7F18F9" />
                        <RiTailwindCssFill className="icon" color="#3EBFF8" />
                        <FaReact className="icon" color="#00D8FF" />
                        <SiRedux className="icon" color="#553E83" />
                        <AiFillHtml5 className="icon" color="#E5532D" />
                        <BiLogoCss3 className="icon" color="#2D53E7" />
                        <IoLogoJavascript className="icon" color="#F7DF1E" />
                        <FaNodeJs className="icon" color="#307C33" />
                    </div>
                </div>
                {/* <div>
                    my skills
                </div> */}
            </section>
        </>
    )
}