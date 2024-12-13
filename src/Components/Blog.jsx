import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BlogCard } from './BlogCard'

export const Blog = () => {

    const BlogItems = [
        { id: 1, headng: 'vs code themes u should know', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quis corporis praesentium beatae dolor ratione nam numquam soluta ipsa.' },
        { id: 2, headng: 'must know javascript topics', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quis corporis praesentium beatae dolor ratione nam numquam soluta ipsa.' },
        { id: 3, headng: 'top programming languages', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quis corporis praesentium beatae dolor ratione nam numquam soluta ipsa.' },
        { id: 4, headng: 'vs code themes', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quis corporis praesentium beatae dolor ratione nam numquam soluta ipsa.' },
        { id: 5, headng: 'vs code themes', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quis corporis praesentium beatae dolor ratione nam numquam soluta ipsa.' },
        { id: 6, headng: 'vs code themes', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet quis corporis praesentium beatae dolor ratione nam numquam soluta ipsa.' },
    ]
    return (
        <>
            <div className='blogContainer grid lg:grid-cols-3 md:grid-cols-2 my-[80px] place-items-center md:gap-y-11 md:mx-[16vw] xl:mx-40 lg:mx-[11.5vw]'>
                {BlogItems.map((item) => (
                    <BlogCard key={item.id} name={item.headng} about={item.content} />
                ))}
            </div>
        </>
    )
}
