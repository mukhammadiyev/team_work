import { useEffect, useState } from 'react'
import './Edit.css'

function Edit({ setEdit, editData, onSave }) {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	// ⏬ Modal ochilganda inputlarni to‘ldiramiz
	useEffect(() => {
		if (editData) {
			setTitle(editData.title)
			setBody(editData.body)
		}
	}, [editData])

	//  Save bosilganda
	const handleSave = () => {
		const updatedPost = {
			...editData,
			title,
			body,
		}
		onSave(updatedPost)      //  Home.jsx dagi handleUpdate
		setEdit(false)           //  Modalni yopamiz
	}

	return (
		<div className='add_post_backdrop'>
			<div className='add_post'>
				<i className='close fa-solid fa-close' onClick={() => setEdit(false)}></i>
				<h2>Edit Post</h2>
				<form>
					<label>
						<span>Title</span>
						<input
							required
							type='text'
							name='title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
					<label>
						<span>Body</span>
						<textarea
							required
							value={body}
							onChange={(e) => setBody(e.target.value)}
						></textarea>
					</label>
					<div className='btns'>
						<button type='button' onClick={() => setEdit(false)}>Cancel</button>
						<button type='button' onClick={handleSave}>Save</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Edit
