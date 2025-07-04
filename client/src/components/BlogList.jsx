import React, { useState } from 'react'
import { blogCategories, blog_data } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'


const BlogList = () => {
    const [menu, setMenu] = useState("All")
    return (
        <div>
            <div className='flex justify-center gap-4 sm:gap-8 relative my-10'>
                {blogCategories.map((item) => (
                    <div key={item} className=' relative'>
                        <button onClick={() => setMenu(item)} className={`cursor-pointer text-gray-500 ${menu === item && "text-white px-4 pt-0.5"}`}>
                            {item}
                            {menu === item && (
                                <motion.div
                                    layoutId='underline'
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className=' absolute top-0 right-0 rounded-full left-0 h-7 -z-1 bg-primary '></motion.div>
                            )}
                        </button>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-28 mx-8 sm:mx-16 xl:mx-40'>
                {
                    blog_data.filter((blog) => menu === "All" ? true : blog.category === menu)
                        .map((blog) => <BlogCard key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    )
}

export default BlogList
