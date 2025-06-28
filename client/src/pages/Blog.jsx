import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Moment from 'moment'

const Blog = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [comment, setComment] = useState([])
  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  const fetchBlogData = async () => {
    const data = blog_data.find(item => item._id === id)
    setData(data)
  }
  const fetchComment = async () => {
    setComment(comments_data)
  }

  const addComment = async (e) => {
    e.preventDefault()
    name
    content

  }

  useEffect(() => {
    fetchBlogData()
    fetchComment()
  }, [])
  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" className='-z-1 -top-50 opacity-50 absolute' />
      <Navbar />
      <div className='text-center text-gray-600 mt-20'>
        <p className='text-primary font-medium py-4  inline-flex px-4 rounded-md'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold text-gray-800 mx-auto max-w-2xl leading-15'>{data.title}</h1>
        <h2 className='my-5 mx-auto max-w-lg truncate'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full border mb-6 text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Nabeel Munir</p>
      </div>

      <div className='max-w-5xl my-10 mx-5 md:mx-auto mt-6'>
        <img src={data.image} alt="" className='rounded-3xl mb-5' />
        <div className='rich-text mx-auto max-w-3xl' dangerouslySetInnerHTML={{ __html: data.description }}></div>
        {/* comment data */}
        <div className='mt-14 mb-10 mx-auto max-w-3xl'>
          <p>Comment ({comment.length})</p>
          <div className='flex flex-col gap-4 mt-5'>
            {comment.map((item, index) => (
              <div key={index} className='relative bg-primary/2 border border-primary/5 max-w-xl text-gray-600 rounded p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt="" className='w-6' />
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='max-w-md text-sm ml-8'>{item.content}</p>
                <div className='flex items-center gap-2 absolute right-4 bottom-3 text-xs'>{Moment(item.createdAt).fromNow()}</div>
              </div>
            ))}

          </div>
        </div>
        {/* commnet section */}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add your comment</p>
          <form onSubmit={addComment} className='flex items-start gap-4 max-w-lg flex-col'>
            <input type="text" required className='outline-none p-2 w-fit border border-gray-300 rounded' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <textarea placeholder='Comment' className='w-full h-48 p-2 border border-gray-300 rounded outline-none' value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
            <button type='submit' className='bg-primary text-white p-2 px-8 rounded hover:scale-105 transition-all cursor-pointer'>Submit</button>
          </form>
        </div>
        {/* share icons */}
        <div className="my-24 mx-auto max-w-3xl">
          <p className='font-semibold my-4'>Share a artical on social media</p>
          <div className="flex">
            <img src={assets.twitter_icon} alt="" width={50} />
            <img src={assets.facebook_icon} alt="" width={50} />
            <img src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className='w-30 h-30 border rounded-full border-gray-800 border-t-transparent animate-spin
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
    </div>
  )
}

export default Blog
