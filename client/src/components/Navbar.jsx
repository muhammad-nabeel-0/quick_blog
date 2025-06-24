import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between py-5 mx-8 sm:mx-20 lg:mx-32'>
      <img onClick={() => navigate("/")} src={assets.logo} alt="logo" className='w-32 sm:w-44' />
      <button onClick={() => navigate("/login")} className=' bg-primary flex items-center gap-2 py-2.5 px-10 cursor-pointer rounded-full text-sm text-white group '>
        Login
        <img src={assets.arrow} alt="arrow" className='w-3 group-hover:translate-x-3 transition-all duration-300' />

      </button>
    </div>
  )
}

export default Navbar
