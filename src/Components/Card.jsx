import PropTypes from 'prop-types';

export const Cards = (props) => {
    return (
        <>
            <div className="card md:w-[200px] xl:w-[179px] lg:w-[153px] cursor-pointer hover:translate-y-[-2px] hover:opacity-[0.6] duration-300">
                <a href={props.link} target='_blank'>
                    <div className="image">
                        <img className="w-full xl:h-[100px] lg:h-[145px] md:h-[120px]" src={props.imageurl} alt={props.name} />
                    </div>
                    <div className="project-content text-base xl:h-[63px] lg:h-[92px] md:h-[70px] mt-[-0.5px] px-[6px] pt-1 pb-4 bg-white">
                        <h3 className="font-bold leading-6 mb-[2px]">{props.name}</h3>
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

