import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import BlogPage from './pages/BlogPage'
import CreateBlog from './pages/CreateBlog'
import Footer from './components/Footer'
import ProfilePage from './pages/ProfilePage'
import SingleBlogPage from './pages/SingleBlogPage'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import Leaderboard from './pages/LeaderBoard'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();

  console.log('hello')
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.key]); 

  return (
    <div className="w-full overflow-x-hidden">
      <NavBar setSelectedCategory={setSelectedCategory} />
      <div className='min-h-17'></div>
      <Routes>
        <Route path='/' element={<BlogPage selectedCategory={selectedCategory} />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/create' element={<CreateBlog />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/blog/:id' element={<SingleBlogPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
