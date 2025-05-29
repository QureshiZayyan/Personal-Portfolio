import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { VscGithub } from "react-icons/vsc";

export const ProjectCard = ({ name, about, imageurl, GithubLink, liveLink, TechStack }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="card bg-white xl:w-[13.8vw] lg:w-[21vw] md:w-[20.5vw]"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="image p-[6px]">
        <img
          className="w-full rounded-[10px] bg-black aspect-video"
          src={imageurl}
          alt={name}
        />
      </div>
      <div className="project-content mt-[-1px] px-[9px] pt-1 pb-4 h-[245px] relative">
        <h3 className="font-semibold leading-6 mb-[8px] text-base xl:text-lg">
          {name}
        </h3>
        <p className="mb-[8px] text-txtclr text-[15px] font-semibold">{TechStack}</p>
        <p className="about-project mt-[1px] mb-[15px] xl:text-[16.8px] lg:text-[14px]">
          {about}
        </p>
        <span className="text-[13.5px] absolute bottom-[15px]">
          <a target="_blank" rel="noopener noreferrer" href={liveLink} className="bg-black text-white py-[2.5px] px-[4px] rounded-[10px]">🔗View live</a>
          <a target="_blank" rel="noopener noreferrer" href={GithubLink} className="bg-[#8252c6] ml-3 text-white rounded-[10px] py-[2.5px] px-4"><VscGithub size={16} className='inline relative left-[-6px]' />Code</a>
        </span>
      </div>
    </motion.div>
  );
};
