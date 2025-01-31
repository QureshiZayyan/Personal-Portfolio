import { easeOut, motion } from "framer-motion";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { easeInOut } from "framer-motion/dom";

export const Skills = () => {
    return (
        <section id='about' className="shadow-bs text-white flex items-center justify-center my-[100px]"

        >
            <motion.div className="solar-system ml-20"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.7,
                    ease: [easeOut],
                }}>
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
            </motion.div>

            <motion.div id="expertise" className='w-[50%] ml-32'
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.7,
                    ease: [easeOut],
                }}>
                <h3 className="text-3xl mb-3">Skills & Expertise</h3>
                <p className="before-after text-[26px] leading-9">
                    With a passion for creating responsive and dynamic web applications, I bring expertise in frontend and backend technologies. Whether it's crafting pixel-perfect designs or architecting seamless state management, I thrive on building solutions that make an impact.
                </p>
            </motion.div>
        </section>
    );
};
