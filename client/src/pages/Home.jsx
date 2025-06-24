import React from 'react'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import EmailBox from '../components/EmailBox'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BlogList />
      <EmailBox />
      <Footer />
    </div>
  )
}

export default Home
