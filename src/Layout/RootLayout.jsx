import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Post from '../Page/post/Post'



const RootLayout = () => {
  
  const [openPost, setOpePost] = useState(false)
  
  const handleOpenPost = () => setOpePost(true)
  return (
    <div>
        <header>
            <Navbar onOpenPost={handleOpenPost}/>
        </header>
        <main>
            <Post openPost={openPost}/>
            <Outlet/>
        </main>
        <footer>
        <Footer/>
        </footer>
    </div>
  )
}

export default RootLayout