// src/layout/RootLayout.jsx
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Post from '../Page/post/Post'

const RootLayout = () => {
	const [openPost, setOpePost] = useState(false)
	const [newPost, setNewPost] = useState(null) //  Home'ga uzatish uchun

	const handleOpenPost = () => setOpePost(true)
	const handlePostAdded = (post) => {
		setNewPost(post)
		setOpePost(false)
	}

	return (
		<div>
			<header>
				<Navbar onOpenPost={handleOpenPost} />
			</header>
			<main>
				<Post openPost={openPost} setOpePost={setOpePost} onPostAdded={handlePostAdded} />

				<Outlet context={{ newPost }} />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default RootLayout
