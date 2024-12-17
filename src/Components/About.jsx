import coding from '../assets/coding.png';

export const About = () => {
    return (
        <>
            <section id='about' className="shadow-bs leading-6 text-white flex items-center xl:px-[170px] lg:flex-row-reverse lg:justify-between md:justify-center md:flex-col text-base pt-[32px] lg:pr-[150px] lg:pb-[23px] lg:pl-[150px] my-[60px] md:pl-[10px] md:pr-[40px] md:pb-[17px]">
                <div className="aboutMe lg:w-[33vw] md:w-[85vw]">
                    <h3 className="font-bold mb-[10px] text-[21px]">About Me</h3>
                    <hr />
                    <p className="my-[17px] font-semibold lg:text-base xl:text-lg">I am extremely proficient in Front-End Development using <span className="skills font-bold">HTML5, Cascading
                        Style
                        Sheets (CSS3),
                        Bootstrap,Tailwind CSS,
                        Advance Javascript, React.Js</span></p>
                    <hr />
                    <div className="grad flex items-center">
                        {/* <img src={cap} alt="cap" className='inline-block w-11 mr-2' /> */}
                        <p className="my-[17px] font-semibold lg:text-base xl:text-lg">Graduated with a degree in <span className='font-bold'>(Bachelor of Science in Information Technology)</span></p>
                    </div>
                </div>

                <div>
                    <img src={coding} alt="" id='code-img' />
                </div>
            </section>
        </>
    )
}