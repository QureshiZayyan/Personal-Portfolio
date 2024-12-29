import { useEffect, useContext } from 'react'
import { StateContext } from '../states/StateProvider';
import { Link } from 'react-router-dom'
import vscode from '../assets/vscode.png'
// import { useParams } from 'react-router-dom';
// ttp://localhost:1337${blog.attributes.image?.data?.attributes.url

export const BlogCard = () => {
    // const { ID } = useParams();
    const { blog, setBlog, setRenderFullBlog } = useContext(StateContext);

    const FetchData = async () => {

        try {
            const response = await fetch(`http://localhost:1337/api/Blogs?populate=*`);
            if (!response.ok) throw new Error('Error fetching data');
            const data = await response.json();
            setBlog(data.data);
            setRenderFullBlog(data.data);
            console.log(data);
        } catch (error) {
            console.log(error);
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
        <section id='blogContainer' className='grid lg:grid-cols-3 md:grid-cols-2 my-[80px] place-items-center md:gap-y-11 md:mx-[16vw] xl:mx-40 lg:mx-[10.5vw]'>
            {blog.map((item) => (
                <div className="blog-card relative bg-white xl:w-[13.8vw] lg:w-[22vw] md:w-[24vw] rounded-[15px]" key={item.id}>
                    <div className="image p-[8px]">
                        <img className="w-full rounded-[15px] bg-black aspect-video" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png' alt={item.Title} />
                    </div>
                    <div className="project-content h-[285px] pt-1 pb-4 pr-[8.2px] pl-[9px]">
                        <h3 className="h-[63px] font-semibold leading-6 text-lg xl:text-lg" dangerouslySetInnerHTML={{ __html: item.Title }} />
                        <p className="about-project mt-[25px] mb-[7px] xl:text-[16.8px] lg:text-[14px]" dangerouslySetInnerHTML={{ __html: truncateText(item.Content, 140) }} />
                        <Link to={`/blogpage/${item.id}`}><button className="button mt-4 absolute bottom-4">
                            <p className="button-text text-[15px] text-white">Read More</p>
                            <p className="iconer"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></p>
                        </button>
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    )
}


