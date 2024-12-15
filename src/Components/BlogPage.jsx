import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogItems } from '../js/Blog'

export const BlogPage = () => {
    const { id } = useParams(); // Get the id from the URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // Find the blog item by id
        const foundBlog = BlogItems.find((item) => item.id === parseInt(id));
        setBlog(foundBlog); // Update state with the found blog
    }, [id]); // Re-run when the id changes

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div className="text-white">
            <h2>{blog.heading}</h2>
            <p>{blog.content}</p>
        </div>
    );
};
