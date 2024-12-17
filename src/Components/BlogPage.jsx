import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogItems } from '../js/Blog'

export const BlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = BlogItems.find((item) => item.id === parseInt(id));
        setBlog(foundBlog);
    }, [id]);

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <section id='BlogPage' className='px-9 my-[50px]'>
            <article>
                <div className="text-white">
                    <h2 className='text-3xl text-txtclr'>{blog.heading}</h2>
                    <p className='mt-4'>{blog.content1}</p>
                    <p className='mt-4'>{blog.content2}</p>
                    <p className='mt-4'>{blog.content3}</p>
                </div>
            </article>
        </section>
    );
};
