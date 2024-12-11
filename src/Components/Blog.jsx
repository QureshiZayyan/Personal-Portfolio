import React from 'react'
import { BlogCard } from './BlogCard'

export const Blog = () => {
    return (
        <>
            <div className='blogContainer grid lg:grid-cols-3 md:grid-cols-2 my-[80px] place-items-center md:gap-y-11 md:mx-[16vw] xl:mx-40 lg:mx-[14vw]'>
                <BlogCard name='vs code extensios' about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum repudiandae itaque sint... ' />
                <BlogCard name='vs code extensios' about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum repudiandae itaque sint... ' />
                <BlogCard name='vs code extensios' about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum repudiandae itaque sint... ' />
                <BlogCard name='vs code extensios' about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum repudiandae itaque sint... ' />
                <BlogCard name='vs code extensios' about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum repudiandae itaque sint... ' />
                <BlogCard name='vs code extensios' about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum repudiandae itaque sint... ' />
            </div>
        </>
    )
}

