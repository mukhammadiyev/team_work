import { useEffect, useState } from 'react'
import Edit from '../../components/edit/Edit'
import Header from '../../components/header/Header'
import PostCard from '../../components/postCard/PostCard'
import Post from '../post/Post'

const Home = () => {
	const [edit, setEdit] = useState(false)
	const [users, setUsers] = useState([])
	const [openPost, setOpenPost] = useState(false)

	// ✅ yangi post qo‘shuvchi funksiya
	const addNewPost = (newPost) => {
		setUsers(prev => [newPost, ...prev])
	}

	const fetchUSer = async () => {
		const request = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await request.json()
		setUsers(data)
	}

	useEffect(() => {
		fetchUSer()
	}, [])

	return (
		<div>
			<Header />
			{/* <button onClick={() => setOpenPost(true)}>+ Add Post</button> */}
			<Post openPost={openPost} setOpePost={setOpenPost} onPostAdded={fetchUSer} onPostAdde={addNewPost} />
			{edit && <Edit setEdit={setEdit} users={users} />}
			<PostCard setEdit={setEdit} users={users} />
		</div>
	)
}

export default Home
