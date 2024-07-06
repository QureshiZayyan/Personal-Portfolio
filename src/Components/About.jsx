import emailIcon from '../assets/email.png';

export const About = () => {
    return (
        <>
            <section className="about shadow-bs leading-6 text-white flex items-center text-[1.1rem] bg-bcg pt-[32px] pr-[9px] pb-[23px] pl-[80px] my-[116px] mx-0 overflow-hidden">
                <div className="aboutMe w-[35vw] pt-[10px] pr-0 pb-[2px] pl-[10px]">
                    <h3 className="font-bold text-white text-[1.5rem] mb-[10px]">About Me</h3>
                    <hr className="text-purpleclr" />
                    <p className="my-[17px] text-[1.2rem]">I am extremely proficient in Front-End Development using <span className="skills font-semibold">HTML5, Cascading
                        Style
                        Sheets (CSS3),
                        Bootstrap,Tailwind CSS,
                        Advance Javascript, React.JS</span></p>
                    <hr />
                    <p className="my-[17px] text-[1.2rem]">Graduated with a degree in <strong>(Bachelor of Science in Information Technology)</strong>.</p>
                </div>

                <div className="query ml-[150px]">
                    <p className="font-bold text-[19px]">Any type of query & Discussion</p>
                    <hr className="mt-[14px] mb-[8px]" />
                    <span className="flex items-center mt-[6px]">
                        <img src={emailIcon} alt="'email" className='w-[30px] mr-[7px]' />
                        <a href="mailto:qureshizayyan49@gmail.com" className="link-color">qureshizayyan49@gmail.com</a>
                    </span>
                </div>
            </section>
        </>
    )
}