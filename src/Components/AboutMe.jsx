import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa6";

export const Aboutme = () => {

    return (
        <>
            <section id='about' className="shadow-bs leading-6 text-white flex items-center xl:px-[170px] lg:flex-row-reverse lg:justify-center md:justify-center md:flex-col text-base pt-[32px] lg:pr-[150px] lg:pb-[23px] lg:pl-[150px] my-[60px] md:pl-[10px] md:pr-[40px] md:pb-[17px]">
                <div className="solar-system">
                    <div className="orbit">
                        <FaBootstrap className="icon" size={52} color="#7F18F9" />
                        <RiTailwindCssFill className="icon" size={52} color="#3EBFF8" />
                        <FaReact className="icon" size={52} color="#00D8FF" />
                        <SiRedux className="icon" size={52} color="#553E83" />
                        <AiFillHtml5 className="icon" size={52} color="#E5532D" />
                        <BiLogoCss3 className="icon" size={52} color="#2D53E7" />
                        <IoLogoJavascript className="icon" size={52} color="#F7DF1E" />
                        {/* <FaVuejs className="icon" size={52} /> */}
                    </div>
                </div>
            </section>
        </>
    )
}