import React from 'react'
import Profile from '../components/categories/mostread/Profile'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import SuggestedArticles from '../components/reusable/SuggestedArticles'


function MostRead() {
  return (
    <div className="bg-white">
      <Navbar />
      <Profile />
      <div className="mb-24" />
      <SuggestedArticles />
      <Footer />
    </div>
  )
}

export default MostRead