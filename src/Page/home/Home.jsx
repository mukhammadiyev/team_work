import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Edit from '../../components/edit/Edit'
import PostCard from '../../components/postCard/PostCard'
import Header from '../../components/header/Header'

const Home = () => {
	const [edit, setEdit] = useState(false)
	const [editData, setEditData] = useState(null)
	const [users, setUsers] = useState([])

	const { newPost } = useOutletContext()

	const fetchUsers = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await res.json()
		setUsers(data)
	}

	useEffect(() => {
		fetchUsers()
	}, [])

	useEffect(() => {
		if (newPost) {
			setUsers(prev => [newPost, ...prev])
		}
	}, [newPost])

	//  Edit saqlanganda array ichida postni yangilash
	const handleUpdate = (updatedPost) => {
		setUsers(prev =>
			prev.map(post =>
				post.id === updatedPost.id ? updatedPost : post
			)
		)
	}

	return (
		<div>
			<Header/>
			{edit && (
				<Edit
					setEdit={setEdit}
					editData={editData}   //  tahrir qilinayotgan post
					onSave={handleUpdate} //  saqlash funksiyasi
				/>
			)}
			<PostCard
				users={users}
				setEdit={setEdit}
				setEditData={setEditData} //  tanlangan postni uzatadi
			/>
		</div>
	)
}

export default Home
