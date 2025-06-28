import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    const { _id, title, description, image, category } = blog
    return (
        <div onClick={() => navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-105 duration-300 cursor-pointer hover:shadow-primary/20'>
            <img src={image} alt="card_image" className='aspect-video' />
            <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 text-xs text-primary rounded-full'>{category}</span>
            <div className='p-5'>
                <h5 className='text-gray-900 mb-2 font-medium'>{title}</h5>
                <p className='mb-3 text-gray-600 text-xs' dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}></p>
            </div>
        </div>
    )
}

export default BlogCard
