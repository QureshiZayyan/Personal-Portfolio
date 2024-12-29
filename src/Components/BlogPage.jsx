import React, { useEffect, useContext, useState } from 'react';
import { StateContext } from '../states/StateProvider';
import { useParams } from 'react-router-dom';

export const BlogPage = () => {
    const { renderFullBlog } = useContext(StateContext);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (renderFullBlog) {
            const foundBlog = renderFullBlog.find((item) => item.id === parseInt(id));
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
                    <h2 className='text-3xl text-txtclr'>{selectedBlog.Title}</h2>
                    {/* <p className='mt-4'>{selectedBlog.Content}</p> */}
                    <div className='mt-4' dangerouslySetInnerHTML={{ __html: selectedBlog.Content }} />
                </div>
            </article>
        </section>
    );
};

// React Developer Tools
// Improves React development with component and state inspection.
// Simple React Snippets
// Provides commonly used React snippets for faster coding.