import { easeOut, motion, useInView } from "framer-motion";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { useRef } from "react";

const Skills = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section id='about' className="shadow-bs text-white flex items-center justify-center my-[110px]"
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            viewport={{ once: true, amount: 1 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="solar-system ml-[30px]">
                <div className="orbit">
                    <FaBootstrap className="icon" color="#7F18F9" />
                    <RiTailwindCssFill className="icon" color="#3EBFF8" />
                    <FaReact className="icon" color="#00D8FF" />
                    <SiRedux className="icon" color="#553E83" />
                    <FaHtml5 className="icon" color="#E5532D" />
                    <BiLogoCss3 className="icon" color="#2D53E7" />
                    <IoLogoJavascript className="icon" color="#F7DF1E" />
                    <FaNodeJs className="icon" color="#307C33" />
                </div>
            </div>

            <div id="expertise" className='w-[50%] ml-[110px]'>
                <h3 className="text-3xl mb-3">Skills & Expertise</h3>
                <p className="before-after text-[26px] leading-9">
                    With a passion for creating responsive and dynamic web applications, I bring expertise in frontend and backend technologies. Whether it's crafting pixel-perfect designs or architecting seamless state management, I thrive on building solutions that make an impact.
                </p>
            </div>
        </motion.section>
    );
};

export default Skills;