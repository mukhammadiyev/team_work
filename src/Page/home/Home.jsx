import { useEffect, useState } from 'react'
import Edit from '../../components/edit/Edit'
import Header from '../../components/header/Header'
import PostCard from '../../components/postCard/PostCard'

const Home = () => {
	const [edit, setEdit] = useState(false)
	const [users, setUsers] = useState([])

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
			{edit && <Edit setEdit={setEdit} users={users} />}
			<PostCard setEdit={setEdit} users={users}/>
		</div>
	)
}

export default Home
