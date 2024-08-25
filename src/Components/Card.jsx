import PropTypes from 'prop-types';

export const Cards = (props) => {
    return (
        <>
            <div className="card md:w-[21vw] xl:w-[13.5vw] lg:w-[13vw] cursor-pointer hover:translate-y-[-2px] hover:opacity-[0.7] duration-300">
                <a href={props.link} target='_blank'>
                    <div className="image">
                        <img className="w-full xl:h-[90px] lg:h-[75px] md:h-[85px]" src={props.imageurl} alt={props.name} />
                    </div>
                    <div className="project-content text-base xl:h-[63px] lg:h-[62px] md:h-[62px] mt-[-0.5px] px-[6px] pt-1 pb-4 bg-white">
                        <h1 className="font-semibold leading-6 mb-[2px] text-base">{props.name}</h1>
                        <p className="about-project mt-[1px] mb-[2px]">{props.about}</p>
                    </div>
                </a>
            </div>
        </>
    )
}

Cards.propTypes = {
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

