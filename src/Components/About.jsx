import emailIcon from '../assets/email.png';

export const About = () => {
    return (
        <>
            <section className="about shadow-bs leading-6 text-white flex items-center lg:flex-row md:justify-center md:flex-col text-base pt-[32px] lg:pr-[9px] lg:pb-[23px] lg:pl-[80px] my-[110px] md:pl-[10px] md:pr-[40px] md:pb-[17px]">
                <div className="aboutMe lg:w-[35vw] md:w-[85vw]">
                    <h3 className="font-bold text-white mb-[10px] text-2xl">About Me</h3>

                    <hr className="text-purpleclr" />
                    <p className="my-[17px]">I am extremely proficient in Front-End Development using <span className="skills font-semibold">HTML5, Cascading
                        Style
                        Sheets (CSS3),
                        Bootstrap,Tailwind CSS,
                        Advance Javascript, React.JS</span></p>
                    <hr />
                    <p className="my-[17px]">Graduated with a degree in <strong>(Bachelor of Science in Information Technology)</strong>.</p>
                </div>

                <div className="query lg:ml-[150px] mt-[26px] text-center md:mx-auto">
                    <p className="font-bold">Any type of query & Discussion</p>
                    <hr className="mt-[14px] mb-[8px]" />
                    <span className="flex items-center justify-center mt-[6px] mx-auto">
                        <img src={emailIcon} alt="'email" className="w-[30px] mr-[7px]" />
                        <a href="mailto:qureshizayyan49@gmail.com" className="link-color">qureshizayyan49@gmail.com</a>
                    </span>
                </div>
            </section>
        </>
    )
}