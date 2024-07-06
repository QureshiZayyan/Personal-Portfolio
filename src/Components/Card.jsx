import PropTypes from 'prop-types';

export const Cards = (props) => {
    return (
        <>
            <div className="card w-[17vw] cursor-pointer hover:translate-y-[-2px] hover:opacity-[0.6] duration-300">
                <a href={props.link} target='_blank'>
                    <div className="image">
                        <img className="w-full h-[19vh] rounded-t-[8.5px]" src={props.imageurl} alt={props.name} />
                    </div>
                    <div className="project-content mt-[-0.5px] px-[5px] py-[5px] h-[20.2vh] rounded-b-[8.5px] bg-white">
                        <h3 className="font-bold text-[1.2rem] leading-6 mb-[5px]">{props.name}</h3>
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