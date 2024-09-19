import emailIcon from '../assets/email.png';
// import { GiGraduateCap } from "react-icons/gi"
// import cap from '../assets/Cap.png';
import coding from '../assets/coding.png';

export const About = () => {
    return (
        <>
            <section className="about shadow-bs leading-6 text-white flex items-center xl:px-[170px] lg:flex-row-reverse lg:justify-between md:justify-center md:flex-col text-base pt-[32px] lg:pr-[150px] lg:pb-[23px] lg:pl-[150px] my-[73px] md:pl-[10px] md:pr-[40px] md:pb-[17px]">
                <div className="aboutMe lg:w-[35vw] md:w-[85vw]">
                    <h3 className="font-bold mb-[10px] text-2xl">About Me</h3>

                    <hr />
                    <p className="my-[17px] font-semibold">I am extremely proficient in Front-End Development using <span className="skills font-bold">HTML5, Cascading
                        Style
                        Sheets (CSS3),
                        Bootstrap,Tailwind CSS,
                        Advance Javascript, React.Js</span></p>
                    <hr />
                    <div className="grad flex items-center">
                        {/* <img src={cap} alt="cap" className='inline-block w-11 mr-2' /> */}
                        <p className="my-[17px] font-semibold">Graduated with a degree in <span className='font-bold'>(Bachelor of Science in Information Technology)</span></p>
                    </div>
                </div>

                <div>
                    <img src={coding} alt="" id='code-img' />
                </div>

                {/* <div className="query lg:ml-[150px] mt-[26px] text-center md:mx-auto">
                    <p className="font-bold lg:text-lg">Any type of query & Discussion</p>
                    <hr className="mt-[14px] mb-[8px]" />
                    <span className="flex items-center justify-center mt-[6px] mx-auto">
                        <img src={emailIcon} alt="'email" className="w-[30px] mr-[7px]" />
                        <a href="mailto:qureshizayyan49@gmail.com" className="link-color font-semibold">qureshizayyan49@gmail.com</a>
                    </span>
                </div> */}
            </section>
        </>
    )
}