// src/pages/home/Home.jsx
import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Edit from '../../components/edit/Edit'
import PostCard from '../../components/postCard/PostCard'
import Header from '../../components/header/Header'

const Home = () => {
	const [edit, setEdit] = useState(false)
	const [users, setUsers] = useState([])
	const { newPost } = useOutletContext() // 🔄 RootLayout'dan keladi

	const fetchUsers = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await res.json()
		setUsers(data)
	}

	useEffect(() => {
		fetchUsers()
	}, [])

	// 🔄 Yangi post qo‘shilganida local state'ga qo‘shish
	useEffect(() => {
		if (newPost) {
			setUsers(prev => [newPost, ...prev])
		}
	}, [newPost])

	return (
		<div>
			<Header/>
			{edit && <Edit setEdit={setEdit} users={users} />}
			<PostCard users={users} setEdit={setEdit} />
		</div>
	)
}

export default Home
