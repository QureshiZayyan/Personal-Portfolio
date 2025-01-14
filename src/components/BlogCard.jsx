import { useEffect, useContext, useState } from 'react'
import { StateContext } from '../states/StateProvider';
import { Link } from 'react-router-dom'
import { SkeletonCard } from './SkeletonCard'

export const BlogCard = () => {

    const { blog, setBlog } = useContext(StateContext);
    const [loading, setLoading] = useState(false);

    const FetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://strapi-portfolio-project.onrender.com/api/blogs?populate=image`);
            if (!response.ok) throw new Error('Error fetching data');
            const data = await response.json();
            setBlog(data.data);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    }

    return (
        <section id='blogContainer' className='grid lg:grid-cols-3 md:grid-cols-2 my-[80px] place-items-center md:gap-y-11 md:mx-[16vw] xl:mx-40 lg:mx-[9.5vw]'>
            {loading ? <SkeletonCard />
                :
                blog.map((item) => (
                    <div className="blog-card mb-8 relative bg-white xl:w-[20vw] lg:w-[22.5vw] md:w-[34vw] rounded-[12px]" key={item.id}>
                        {/* <div className="image p-[8px]">
                            <img className="w-full rounded-[15px] bg-black aspect-video" src={item.image ? item.image.url : null} alt={item.title} />
                        </div> */}
                        <div className="project-content h-[265px] pt-3 pb-4 pr-[8.2px] pl-[9px]">
                            <h3 className="h-[63px] font-semibold leading-6 text-lg xl:text-lg" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <p className="about-project mt-[25px] mb-[7px] xl:text-[16.8px] lg:text-[14px]" dangerouslySetInnerHTML={{ __html: truncateText(item.content, 105) }} />
                            <Link to={`/blogpage/${item.id}`}><button className="button absolute bottom-3">
                                <p className="button-text text-[15px] text-white">Read More</p>
                                <p className="iconer"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></p>
                            </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}



