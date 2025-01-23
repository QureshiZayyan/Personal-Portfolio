import { useEffect } from "react";
import dev from "../assets/developer2.png";
import Typed from "typed.js";
import { motion } from "framer-motion";

export const Intro = () => {
  useEffect(() => {
    const options = {
      strings: ["Technology Enthusiast", "Programmer", "Software Developer"],
      typeSpeed: 30,
      backSpeed: 14,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed("#profession", options);

    return () => {
      typed.destroy();
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section id="intro">
        <motion.div
          className="intro flex items-center mt-[50px] mx-16"
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div
            className="left lg:w-[60%] lg:h-auto xl:w-[49%] xl:h-auto md:w-[304px] md:h-[200px]"
            variants={textVariants}
          >
            <h1 className="text-[29.8px] font-bold text-white leading-[39px] xl:text-[33px]">
              Hey, My Self <span className="name">Zayyan Qureshi</span>
              <br />
              <span>& I&apos;m a Passionate</span>
              <br />
              <span id="profession">Software Developer</span>
            </h1>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right w-[50%]"
            variants={imageVariants}
          >
            <img
              src={dev}
              alt="codeimg"
              className="img xl:w-[56%] lg:w-[63%] md:w-[70%] ml-32"
            />
          </motion.div>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          className="resume-github mx-[65px] relative lg:-top-8 md:top-3 xl:-top-16"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <a
            href="src/assets/Resume.pdf"
            target="_blank"
            className="text"
            download
          >
            <motion.button
              className="btn lg:text-[13.4px] text-[13px] px-[6px] py-[4px] font-[650] cursor-pointer rounded-[5px] bg-white border-2 border-bdclr"
              variants={buttonVariants}
            >
              Download Resume
            </motion.button>
          </a>
          <a
            href="https://github.com/QureshiZayyan"
            target="_blank"
            className="text"
          >
            <motion.button
              className="btn lg:text-[13.4px] text-[13px] px-[6px] py-[4px] font-[650] cursor-pointer border-2 text-white rounded-[5px] ml-[13px]"
              variants={buttonVariants}
            >
              Visit Github
            </motion.button>
          </a>
        </motion.div>
      </section>
    </>
  );
};
