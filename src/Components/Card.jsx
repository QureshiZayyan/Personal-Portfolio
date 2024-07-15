import PropTypes from 'prop-types';

export const Cards = (props) => {
    return (
        <>
            <div className="card sm:w-[36vw] md:w-[200px] xl:w-[15vw] lg:w-[18vw] cursor-pointer hover:translate-y-[-2px] hover:opacity-[0.6] duration-300">
                <a href={props.link} target='_blank'>
                    <div className="image">
                        <img className="w-full xl:h-[11vh] lg:h-[17vh] md:h-[120px] rounded-t-[8.5px]" src={props.imageurl} alt={props.name} />
                    </div>
                    <div className="project-content text-base xl:h-[9vh] lg:h-[15vh] md:h-[10vh] mt-[-0.5px] px-[5px] py-[5px] rounded-b-[8.5px] bg-white">
                        <h3 className="font-bold leading-6 mb-[5px]">{props.name}</h3>
                        <p className="about-project mt-[1px] mb-[5px]">{props.about}</p>
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