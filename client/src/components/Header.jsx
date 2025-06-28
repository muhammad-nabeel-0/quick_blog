import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='mx-8 sm:mx-16 lg:mx-24 relative'>
            <div className='text-center mt-20 mb-8 '>
                <div className=' inline-flex items-center mb-4 justify-center gap-4 text-primary border border-primary/40 px-6 py-1.5 text-sm bg-primary/10 rounded-full'>
                    <p>New: AI feature integrated</p>
                    <img src={assets.star_icon} alt="star_icon" className='w-2.5' />
                </div>
                <h1 className='text-3xl  sm:text-6xl sm:leading-16 font-semibold text-gray-700 font-bebas '>Your own <span className='text-primary'>blogging</span><br />
                    platform.</h1>
                <p className='text-gray-500 m-auto max-sm:text-xs my-6 sm:my-8 max-w-2xl'>This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>
                {/* search box */}
                <form className=' flex justify-between max-w-lg max-sm:scale-75 mx-auto bg-white rounded overflow-hidden border border-gray-300'>
                    <input type="text" placeholder='Search for blogs' className='w-full outline-none pl-4' />
                    <button type='submit' className='bg-primary text-white px-8 py-2 m-1.5 cursor-pointer hover:scale-105 transition-all rounded'>Search</button>
                </form>
            </div>
            <img src={assets.gradientBackground} alt="bg" className='absolute -top-50 opacity-50 -z-1' />

        </div>
    )
}

export default Header
