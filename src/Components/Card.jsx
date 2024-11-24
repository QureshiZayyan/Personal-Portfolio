import PropTypes from 'prop-types';

export const Cards = (props) => {
    return (
        <>

            <div className="card bg-white xl:w-[13vw] lg:w-[15vw] md:w-[24vw]">
                <a href={props.link} target='_blank'>
                    <div className="image p-[8px]">
                        <img className="w-full rounded-[10px] bg-black aspect-video" src={props.imageurl} alt={props.name} />
                    </div>
                    <div className="project-content xl:h-[60px] lg:h-[59px] md:h-[62px] mt-[-1px] px-[8px] pt-1 pb-4">
                        <h3 className="font-semibold leading-6 mb-[2px] text-base">{props.name}</h3>
                        <p className="about-project mt-[1px] mb-[2px] text-[14.8px]">{props.about}</p>
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

