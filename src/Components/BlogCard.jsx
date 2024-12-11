export const BlogCard = ({ name, about, imageurl, link }) => {
    return (
        <>
            <div className="bg-white xl:w-[13.8vw] lg:w-[19vw] md:w-[24vw] rounded-xl">
                <a href={link} target='_blank'>
                    <div className="image p-[7.5px]">
                        <img className="w-full rounded-[14px] bg-black aspect-video" src={imageurl} alt={name} />
                    </div>
                    <div className="project-content mt-[-1px] px-[8px] pt-1 pb-4">
                        <h3 className="font-semibold leading-6 mb-[7px] text-lg xl:text-lg">{name}</h3>
                        <p className="about-project mt-[1px] mb-[7px] xl:text-[16.8px] lg:text-[14px]">{about}</p>
                        <button className="button mt-4">
                            <p className="button-text">Read More</p> <p className="iconer"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></p>
                        </button>
                    </div>
                </a>
            </div>
        </>
    )
}
