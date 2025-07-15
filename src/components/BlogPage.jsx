import React, { useEffect, useContext, useState } from 'react';
import { StateContext } from '../states/StateProvider';
import { useParams } from 'react-router-dom';

export const BlogPage = () => {
    const { blog } = useContext(StateContext);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (blog) {
            const foundBlog = blog.find((item) => item.id === (id));
            setSelectedBlog(foundBlog || null);
        }
    }, [id]);

    if (!selectedBlog) {
        return <p>Blog not found</p>;
    }

    return (
        <section id='BlogPage' className='px-6 my-[50px]'>
            <article>
                <div className="text-white">
                    <h2 className='text-3xl text-txtclr font-medium'>{selectedBlog.title}</h2>
                    <p className='mt-4'>{selectedBlog[1]}</p>
                    <p className='mt-4'>{selectedBlog[2]}</p>
                    <p className='mt-4'>{selectedBlog[3]}</p>
                    <p className='mt-4'>{selectedBlog[4]}</p>
                    <p className='mt-4'>{selectedBlog[5]}</p>
                    <p className='mt-4'>{selectedBlog[6]}</p>
                    <p className='mt-4'>{selectedBlog[7]}</p>
                    <p className='mt-4'>{selectedBlog[8]}</p>
                    <p className='mt-4'>{selectedBlog[9]}</p>
                </div>
            </article>
        </section>
    );
};
