import React, { useEffect, useContext, useState } from 'react';
import { StateContext } from '../states/StateProvider';
import { useParams } from 'react-router-dom';

export const BlogPage = () => {
    const { blog } = useContext(StateContext);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (blog) {
            const foundBlog = blog.find((item) => item.id === parseInt(id));
            setSelectedBlog(foundBlog || null);
        }
    }, [id]);

    if (!selectedBlog) {
        return <p>Blog not found</p>;
    }

    return (
        <section id='BlogPage' className='px-9 my-[50px]'>
            <article>
                <div className="text-white">
                    <h2 className='text-3xl text-txtclr'>{selectedBlog.title}</h2>

                    <div className='mt-4' dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                </div>
            </article>
        </section>
    );
};
