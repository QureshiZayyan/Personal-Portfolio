import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
// export const ProjectCard = ({ name, about, imageurl, link }) => {

//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });
//     return (
//         <>
//             <div className="card bg-white xl:w-[13.8vw] lg:w-[13.5vw] md:w-[20.5vw]">
//                 <a href={link} target='_blank'>
//                     <div className="image p-[7.5px]">
//                         <img className="w-full rounded-[14px] bg-black aspect-video" src={imageurl} alt={name} />
//                     </div>
//                     <div className="project-content xl:h-[70px] lg:h-[59px] md:h-[62px] mt-[-1px] px-[8px] pt-1 pb-4">
//                         <h3 className="font-semibold leading-6 mb-[2px] text-base xl:text-lg">{name}</h3>
//                         <p className="about-project mt-[1px] mb-[2px] xl:text-[16.8px] lg:text-[14px]">{about}</p>
//                     </div>
//                 </a>
//             </div>
//         </>
//     )
// }


export const ProjectCard = ({ name, about, imageurl, link }) => {
  const ref = useRef(null); // Reference for observing the element
  const isInView = useInView(ref, { once: true }); // Check if the element is in the viewport

  return (
    <motion.div
      ref={ref}
      className="card bg-white xl:w-[13.8vw] lg:w-[13.5vw] md:w-[20.5vw]"
      initial={{ opacity: 0, x: -100 }} // Start from the left (-100px offset)
      animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate to its position
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="image p-[7.5px]">
          <img
            className="w-full rounded-[14px] bg-black aspect-video"
            src={imageurl}
            alt={name}
          />
        </div>
        <div className="project-content xl:h-[70px] lg:h-[59px] md:h-[62px] mt-[-1px] px-[8px] pt-1 pb-4">
          <h3 className="font-semibold leading-6 mb-[2px] text-base xl:text-lg">
            {name}
          </h3>
          <p className="about-project mt-[1px] mb-[2px] xl:text-[16.8px] lg:text-[14px]">
            {about}
          </p>
        </div>
      </a>
    </motion.div>
  );
};
