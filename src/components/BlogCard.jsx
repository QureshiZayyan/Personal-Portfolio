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
        <section id='blogContainer' className='grid lg:grid-cols-3 md:grid-cols-2 my-[80px] place-items-center md:gap-y-11 md:mx-[10vw] xl:mx-40 lg:mx-[9.5vw]'>
            {loading ? <SkeletonCard />
                :
                blog.map((item) => (
                    <div className="blog-card mb-8 relative bg-white xl:w-[20vw] lg:w-[22.5vw] rounded-[12px]" key={item.id}>
                        {/* <div className="image p-[8px]">
                            <img className="w-full rounded-[15px] bg-black aspect-video" src={item.image ? item.image.url : null} alt={item.title} />
                        </div> */}
                        <div className="project-content h-[280px] pt-3 pb-4 pr-[8.2px] pl-[9px]">
                            <h3 className="h-[63px] font-semibold leading-6 text-lg xl:text-lg" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <p className="about-project mt-[25px] mb-[7px] xl:text-[16.8px] lg:text-[14px]" dangerouslySetInnerHTML={{ __html: truncateText(item[0, 1], 120) }} />
                            <Link to={`/blogpage/${item.id}`}><button className="text-[15px] font-semibold absolute py-[2px] bottom-[13px] bg-[#8252c6] px-[4px] text-white rounded-[5px]">
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
