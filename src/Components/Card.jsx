export const Cards = ({ name, about, imageurl, link }) => {
    return (
        <>
            <div className="card bg-white xl:w-[13.8vw] lg:w-[14vw] md:w-[24vw]">
                <a href={link} target='_blank'>
                    <div className="image p-[7.5px]">
                        <img className="w-full rounded-[14px] bg-black aspect-video" src={imageurl} alt={name} />
                    </div>
                    <div className="project-content xl:h-[70px] lg:h-[59px] md:h-[62px] mt-[-1px] px-[8px] pt-1 pb-4">
                        <h3 className="font-semibold leading-6 mb-[2px] text-base xl:text-lg">{name}</h3>
                        <p className="about-project mt-[1px] mb-[2px] xl:text-[16.8px] lg:text-[14px]">{about}</p>
                    </div>
                </a>
            </div>
        </>
    )
}