import { useEffect, useContext, useState } from 'react'
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';
import { StateContext } from '../states/StateProvider';
import { Link } from 'react-router-dom'
import { SkeletonCard } from './SkeletonCard'

export const BlogCard = () => {

    const { blog, setBlog } = useContext(StateContext);
    const [loading, setLoading] = useState(false);

    const FetchData = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "Blogs"));
            const response = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBlog(response)
        } catch (error) {
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
        <section id='blogContainer' className='md:grid-cols-2 lg:grid-cols-3 grid my-[80px] place-items-center md:gap-y-11 md:mx-[10vw] xl:mx-40 lg:mx-[7vw]'>
            {loading ? <SkeletonCard />
                :
                blog.map((item) => (
                    <div className="blog-card sm:w-[40vw] md:w-[35vw] lg:w-[25vw] mb-8 relative bg-white rounded-[12px]" key={item.id}>
                        {/* <div className="image p-[8px]">
                            <img className="w-full rounded-[15px] bg-black aspect-video" src={item.image ? item.image.url : null} alt={item.title} />
                        </div> */}
                        <div className="project-content h-[300px] lg:h-[270px] pt-3 pb-4 pr-[8.2px] pl-[9px]">
                            <h3 className="h-[63px] font-semibold leading-6 text-[#8252C6] text-lg xl:text-lg" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <p className="about-project font-semibold mt-[25px] mb-[7px] xl:text-[16.8px] lg:text-[15px]" dangerouslySetInnerHTML={{ __html: truncateText(item[0, 1], 118) }} />
                            <Link to={`/blogpage/${item.id}`}><button className="text-[15px] font-semibold absolute py-[3px] bottom-[14px] bg-[#8252c6] px-[4px] text-white rounded-[5px]">
                                Read More
                            </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
