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
            <section id='about' className="shadow-bs leading-6 text-white flex items-center justify-center my-28">
                <div className="solar-system ml-32 w-[50%]">
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
                <div id="expertise" className='w-[50%] bebas-neue text-2xl ml-32'>
                    <p className="before-after">With a passion for creating responsive and dynamic web applications, I bring expertise in frontend and backend technologies. Whether it's crafting pixel-perfect designs or architecting seamless state management, I thrive on building solutions that make an impact.
                    </p>
                </div>
            </section>
        </>
    )
}
